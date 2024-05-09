import { useState } from "react";

const Home = () => {
    const [passwordLength, setPasswordLength] = useState(8);
    const [numbers, setNumbers] = useState(true);
    const [smallLetters, setSmallLetters] = useState(true);
    const [capitalLetters, setCapitalLetters] = useState(true);
    const [specialCharacters, setSpecialCharacters] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleClick = () => {
        const passwordSet = [];
        if(capitalLetters) passwordSet.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        if(smallLetters) passwordSet.push("abcdefghijklmnopqrstuvwxyz")
        if(numbers) passwordSet.push("12345678910")
        if(specialCharacters) passwordSet.push("!@#$%^&*()-_=+\|[]{};:/?.>")

        if(passwordSet.length < 1){
            setGeneratedPassword (' ');
            return;
        }

        let password = '';
        const totalSets = passwordSet.length;
        for(let i = 0; i < passwordLength; i++){
            const randomIdx = Math.floor(Math.random() * totalSets);
            const ch = passwordSet[randomIdx];
            const randomCh = Math.floor(Math.random() * ch.length);
            password += ch[randomCh];
        }
        setGeneratedPassword(password);
        return;
    }
    return (
        <>
            <div className="w-[40%] flex justify-center items-center p-10 flex-col text-white gap-4 rounded-2xl bg-slate-100 bg-opacity-10   shadow-xl" style={{ backdropFilter: 'blur(15px)' }}>
                <p className="text-3xl font-thin mb-3">Password Generator</p>
                <div className="w-[70%] flex justify-between items-center">
                    <p className="font-light text-2xl ">Length</p>
                    <input className="w-[20%] p-2 font-extralight text-center bg-slate-100 text-gray-600 bg-opacity-70 rounded-lg appearance-none"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(parseInt(e.target.value))}>
                    </input>
                </div>
                <input type="range" id="inputRange" className="w-[80%] appearance-none rounded-lg h-1 outline-none" min="8" max="50" defaultValue="8" value={passwordLength} onChange={(e) => setPasswordLength(parseInt(e.target.value))} />
                <div className="flex flex-col items-start gap-2 w-[80%]">
                    <div>    
                        <input type="checkbox" className = " bg-blue-400" id="numbers" checked={numbers} onChange={(e) => setNumbers(e.target.checked)}/>
                        <span className="font-light">&nbsp;Numbers</span>
                        <span className="font-xs text-gray-800">&nbsp;(0-9)</span>
                    </div>
                    <div>    
                        <input type="checkbox" id="small" checked = {smallLetters} onChange={(e) => setSmallLetters(e.target.checked)}/>
                        <span className="font-light">&nbsp;Small Letters</span>
                        <span className="font-xs text-gray-800">&nbsp;(a-z)</span>
                    </div>
                    <div>    
                        <input type="checkbox" id="capital" checked = {capitalLetters} onChange={(e) => setCapitalLetters(e.target.checked)}/>
                        <span className="font-light">&nbsp;Capital Letters</span>
                        <span className="font-xs text-gray-800">&nbsp;(A-Z)</span>
                    </div>
                    <div>    
                        <input type="checkbox" id="special"checked = {specialCharacters} onChange={(e) => setSpecialCharacters(e.target.checked)}/>
                        <span className="font-light">&nbsp;Special Characters</span>
                        <span className="font-xs text-gray-800">&nbsp;(/*%$#!@^&*)</span>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2">   
                    <button onClick={handleClick} className="w-[80%] rounded-lg bg-sky-400 p-2 text-xl font-thin text-white hover:bg-sky-500 transition-all ease-in-out delay-75">
                        Generate 
                    </button>
                    <div className="w-[80%] rounded-lg bg-white bg-opacity-20 text-gray-600 p-4 hover:bg-sky-600 hover:text-white hover:cursor-pointer transition-all ease-in-out delay-75">
                        {generatedPassword ? generatedPassword : "Click on generate button" }
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Home;
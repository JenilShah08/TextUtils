import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode === 'light'?'white':'#042743'
    }
    
    // const [btnText, setBtnText] = useState("Enable Light Mode")
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
        
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
        <div className='container' >
            <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
<<<<<<< HEAD
                            MyApp gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
=======
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
>>>>>>> d648245071130cc0f925a75cfd629b724b093611
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
<<<<<<< HEAD
                            MyApp is a free character counter tool that provides instant character count & word count statistics for a given text. MyApp reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
=======
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
>>>>>>> d648245071130cc0f925a75cfd629b724b093611
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
<<<<<<< HEAD
                            This word counter software workis in my web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
=======
                            This word counter software works in my web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
>>>>>>> d648245071130cc0f925a75cfd629b724b093611
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
                </div> */}
        </div>
    )
}

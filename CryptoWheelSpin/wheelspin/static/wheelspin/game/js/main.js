
            const userlist = JSON.parse(document.getElementById('userlist').textContent);
            const deg = JSON.parse(document.getElementById('deg').textContent);
            console.log(typeof(userlist))
            let colorsXXX = [
                "rgb(81, 24, 255)",
                "rgb(100, 60, 88)",
                "rgb(129, 163, 98)",
                "rgb(192, 141, 159)",
                "rgb(101, 54, 102)",
                "rgb(142, 38, 204)",
                "rgb(141, 238, 203)",
                "rgb(239, 12, 180)",
                "rgb(163, 217, 27)",
                "rgb(216, 157, 66)",
                "rgb(61, 161, 215)",
                "rgb(58, 173, 9)",
                "rgb(33, 95, 17)",
                "rgb(101, 222, 121)",
                "rgb(90, 127, 91)",
                "rgb(218, 49, 102)",
                "rgb(89, 53, 190)",
                "rgb(122, 172, 242)",
                "rgb(138, 13, 117)",
                "rgb(221, 108, 67)",
                "rgb(33, 251, 38)",
                "rgb(26, 15, 173)",
                "rgb(38, 146, 44)",
                "rgb(231, 61, 149)",
                "rgb(100, 40, 133)",
                "rgb(217, 183, 86)",
                "rgb(33, 253, 17)",
                "rgb(134, 162, 46)",
                "rgb(95, 208, 248)",
                "rgb(95, 147, 215)",
                "rgb(177, 241, 176)",
                "rgb(173, 243, 133)",
                "rgb(182, 165, 108)",
                "rgb(179, 114, 157)",
                "rgb(14, 204, 81)",
                "rgb(116, 150, 173)",
                "rgb(39, 82, 99)",
                "rgb(178, 140, 44)",
                "rgb(57, 138, 185)",
                "rgb(18, 18, 125)",
                "rgb(115, 192, 70)",
                "rgb(99, 243, 33)",
                "rgb(233, 230, 37)",
                "rgb(67, 102, 126)",
                "rgb(102, 113, 20)",
                "rgb(54, 34, 58)",
                "rgb(177, 158, 125)",
                "rgb(53, 6, 169)",
                "rgb(217, 160, 252)",
                "rgb(53, 12, 197)",
                "rgb(101, 238, 95)",
                "rgb(169, 205, 190)",
                "rgb(131, 28, 3)",
                "rgb(111, 150, 137)",
                "rgb(17, 77, 145)",
                "rgb(163, 59, 161)",
                "rgb(223, 8, 195)",
                "rgb(46, 159, 238)",
                "rgb(4, 218, 207)",
                "rgb(168, 64, 224)",
                "rgb(107, 199, 80)",
                "rgb(142, 81, 41)",
                "rgb(218, 34, 88)",
                "rgb(150, 27, 87)",
                "rgb(77, 147, 226)",
                "rgb(37, 74, 35)",
                "rgb(232, 225, 252)",
                "rgb(46, 114, 131)",
                "rgb(45, 44, 39)",
                "rgb(20, 238, 188)",
                "rgb(114, 78, 126)",
                "rgb(125, 93, 146)",
                "rgb(54, 169, 56)",
                "rgb(66, 164, 242)",
                "rgb(125, 132, 103)",
                "rgb(20, 49, 213)",
                "rgb(33, 152, 101)",
                "rgb(225, 53, 245)",
                "rgb(75, 56, 152)",
                "rgb(194, 67, 112)",
                "rgb(109, 35, 21)",
                "rgb(136, 165, 40)",
                "rgb(250, 102, 234)",
                "rgb(8, 172, 129)",
                "rgb(45, 92, 243)",
                "rgb(82, 159, 166)",
                "rgb(97, 222, 244)",
                "rgb(184, 66, 209)",
                "rgb(0, 141, 237)",
                "rgb(68, 227, 155)",
                "rgb(52, 168, 123)",
                "rgb(135, 70, 197)",
                "rgb(218, 132, 214)",
                "rgb(84, 18, 100)",
                "rgb(93, 253, 42)",
                "rgb(181, 25, 145)",
                "rgb(138, 39, 93)",
                "rgb(231, 115, 248)",
                "rgb(103, 66, 218)",
                "rgb(80, 152, 185)"
              ]
            let segments = []
            userlist.map((e,key)=>{
                // var randomColor = Math.floor(Math.random()*16777215).toString(16);
                console.log(e,key)
                console.log(colorsXXX[key])
                obj = {'fillStyle' : colorsXXX[key], 'text' : e}
                segments.push(obj)
            })
            
            // Create new wheel object specifying the parameters at creation time.
            let theWheel = new Winwheel({
                'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
                'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
                'textFontSize'    : 16,         // Set default font size for the segments.
                'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
                'textAlignment'   : 'outer',    // Align text to outside of wheel.
                'numSegments'     : segments.length,         // Specify number of segments.
                'segments'        :   segments,          // Define segments including colour and text.
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 10,    // Duration in seconds.
                    'spins'    : 3,     // Default number of complete spins.
                    'callbackFinished' : alertPrize,
                    'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
                    'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
                },
                'pins' :				// Turn pins on.
                {
                    'number'     : segments.length,
                    'fillStyle'  : 'yellow',
                    'outerRadius': 4,
                }
            });

            // Loads the tick audio sound in to an audio object.
            let audio = new Audio('../../../static/wheelspin/game/media/tick.mp3');

            // This function is called when the sound is to be played.
            function playSound()
            {
                // Stop and rewind the sound if it already happens to be playing.
                audio.pause();
                audio.currentTime = 0;

                // Play the sound.
                audio.play();
            }

            // Vars used by the code in this page to do power controls.
            let wheelPower    = 0;
            let wheelSpinning = false;

            // -------------------------------------------------------
            // Function to handle the onClick on the power buttons.
            // -------------------------------------------------------
            /*function powerSelected(powerLevel)
            {
                // Ensure that power can't be changed while wheel is spinning.
                if (wheelSpinning == false) {
                    // Reset all to grey incase this is not the first time the user has selected the power.
                    document.getElementById('pw1').className = "";
                    document.getElementById('pw2').className = "";
                    document.getElementById('pw3').className = "";

                    // Now light up all cells below-and-including the one selected by changing the class.
                    if (powerLevel >= 1) {
                        document.getElementById('pw1').className = "pw1";
                    }

                    if (powerLevel >= 2) {
                        document.getElementById('pw2').className = "pw2";
                    }

                    if (powerLevel >= 3) {
                        document.getElementById('pw3').className = "pw3";
                    }

                    // Set wheelPower var used when spin button is clicked.
                    

                    // Light up the spin button by changing it's source image and adding a clickable class to it.
                    //document.getElementById('spin_button').src = "spin_on.png";
                    
                }
            }*/
            wheelPower = 3;
            document.getElementById('spin_button').className = "clickable";

            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false) {
                    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
                    // to rotate with the duration of the animation the quicker the wheel spins.
                    if (wheelPower == 1) {
                        theWheel.animation.spins = 3;
                    } else if (wheelPower == 2) {
                        theWheel.animation.spins = 6;
                    } else if (wheelPower == 3) {
                        theWheel.animation.spins = 500;
                    }

                    // Disable the spin button so can't click again while wheel is spinning.
                    //document.getElementById('spin_button').src       = "spin_off.png";
                    document.getElementById('spin_button').className = "";

                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();

                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = false;
                }
            }

            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.

                document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
                document.getElementById('pw2').className = "";
                document.getElementById('pw3').className = "";

                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }

            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
            // -------------------------------------------------------
            function alertPrize(indicatedSegment)
            {
                // Just alert to the user what happened.
                // In a real project probably want to do something more interesting than this with the result.
                if (indicatedSegment.text == 'LOOSE TURN') {
                    // alert('Sorry but you loose a turn.');
                } else if (indicatedSegment.text == 'BANKRUPT') {
                    // alert('Oh no, you have gone BANKRUPT!');
                } else {
                    // alert("You have won " + indicatedSegment.text);
                    setTimeout(
                        function() {
                            let fzf = document.querySelector('.four-zero-four')
                            fzf.innerHTML = `
                            <div style="background:black;display:flex;justify-content:center;">
                                <div>
                                    <h1>The Winner is ${indicatedSegment.text}</h1>
                                    <a style="display:flex;justify-content:center;">
                                        <button class="btn btn-primary my-4">Please Wait Redirecting</button>
                                    </a>
                                </div>
                            </div>
                            `
                        }, 30000);
            
                    
                }
            }



            // Create new wheel object specifying the parameters at creation time.
            let theWheel = new Winwheel({
                'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
                'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
                'textFontSize'    : 16,         // Set default font size for the segments.
                'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
                'textAlignment'   : 'outer',    // Align text to outside of wheel.
                'numSegments'     : 80,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ee1c24', 'text' : 'Jisan'},
                   {'fillStyle' : '#3cb878', 'text' : 'Raihan'},
                   {'fillStyle' : '#f6989d', 'text' : 'Saiful'},
                   {'fillStyle' : '#00aef0', 'text' : 'Rion'},
                   {'fillStyle' : '#f26522', 'text' : 'Wahid'},
                   {'fillStyle' : '#0ff000', 'text' : 'Sakib'},
                   {'fillStyle' : '#e70697', 'text' : 'Bely'},
                   {'fillStyle' : '#fff200', 'text' : 'Mohona'},
                   {'fillStyle' : '#f6989d', 'text' : 'Himel'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Munna'},
                   {'fillStyle' : '#3cb878', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Maruf'},
                   {'fillStyle' : '#a186be', 'text' : 'Sadman'},
                   {'fillStyle' : '#fff200', 'text' : 'Jerin'},
                   {'fillStyle' : '#00aef0', 'text' : 'Toushin'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Ali'},
                   {'fillStyle' : '#f6989d', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Raaz'},
                   {'fillStyle' : '#3cb878', 'text' : 'Anvir'},
                   {'fillStyle' : '#00ff00', 'text' : 'Tanvir'},
                   {'fillStyle' : '#a186be', 'text' : 'Redwan'},
                   {'fillStyle' : '#fff200', 'text' : 'Hasan'},
                   {'fillStyle' : '#00aef0', 'text' : 'Shiblee'},
                   {'fillStyle' : '#f6989d', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Raaz'},
                   {'fillStyle' : '#3cb878', 'text' : 'Anvir'},
                   {'fillStyle' : '#00ff00', 'text' : 'Tanvir'},
                   {'fillStyle' : '#a186be', 'text' : 'Redwan'},
                   {'fillStyle' : '#fff200', 'text' : 'Hasan'},
                   {'fillStyle' : '#00aef0', 'text' : 'Shiblee'},
                   {'fillStyle' : '#ffffff', 'text' : 'Rakib'},
                   {'fillStyle' : '#ffffff', 'text' : 'Rakib'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Jisan'},
                   {'fillStyle' : '#3cb878', 'text' : 'Raihan'},
                   {'fillStyle' : '#f6989d', 'text' : 'Saiful'},
                   {'fillStyle' : '#00aef0', 'text' : 'Rion'},
                   {'fillStyle' : '#f26522', 'text' : 'Wahid'},
                   {'fillStyle' : '#0ff000', 'text' : 'Sakib'},
                   {'fillStyle' : '#e70697', 'text' : 'Bely'},
                   {'fillStyle' : '#fff200', 'text' : 'Mohona'},
                   {'fillStyle' : '#f6989d', 'text' : 'Himel'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Munna'},
                   {'fillStyle' : '#3cb878', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Maruf'},
                   {'fillStyle' : '#a186be', 'text' : 'Sadman'},
                   {'fillStyle' : '#fff200', 'text' : 'Jerin'},
                   {'fillStyle' : '#00aef0', 'text' : 'Toushin'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Ali'},
                   {'fillStyle' : '#f6989d', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Raaz'},
                   {'fillStyle' : '#3cb878', 'text' : 'Anvir'},
                   {'fillStyle' : '#00ff00', 'text' : 'Tanvir'},
                   {'fillStyle' : '#a186be', 'text' : 'Redwan'},
                   {'fillStyle' : '#fff200', 'text' : 'Hasan'},
                   {'fillStyle' : '#00aef0', 'text' : 'Shiblee'},
                   {'fillStyle' : '#ffffff', 'text' : 'Rakib'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Jisan'},
                   {'fillStyle' : '#3cb878', 'text' : 'Raihan'},
                   {'fillStyle' : '#f6989d', 'text' : 'Saiful'},
                   {'fillStyle' : '#00aef0', 'text' : 'Rion'},
                   {'fillStyle' : '#f26522', 'text' : 'Wahid'},
                   {'fillStyle' : '#0ff000', 'text' : 'Sakib'},
                   {'fillStyle' : '#e70697', 'text' : 'Bely'},
                   {'fillStyle' : '#fff200', 'text' : 'Mohona'},
                   {'fillStyle' : '#f6989d', 'text' : 'Himel'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Munna'},
                   {'fillStyle' : '#3cb878', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Maruf'},
                   {'fillStyle' : '#a186be', 'text' : 'Sadman'},
                   {'fillStyle' : '#fff200', 'text' : 'Jerin'},
                   {'fillStyle' : '#00aef0', 'text' : 'Toushin'},
                   {'fillStyle' : '#ee1c24', 'text' : 'Ali'},
                   {'fillStyle' : '#f6989d', 'text' : 'Sohan'},
                   {'fillStyle' : '#f26522', 'text' : 'Raaz'},
                   {'fillStyle' : '#3cb878', 'text' : 'Anvir'},
                   {'fillStyle' : '#00ff00', 'text' : 'Tanvir'},
                   {'fillStyle' : '#a186be', 'text' : 'Redwan'},
                   {'fillStyle' : '#fff200', 'text' : 'Hasan'},
                   {'fillStyle' : '#00aef0', 'text' : 'Shiblee'},
                   {'fillStyle' : '#ffffff', 'text' : 'Rakib'},
                ],
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
                    'number'     : 80,
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
                    alert('Sorry but you loose a turn.');
                } else if (indicatedSegment.text == 'BANKRUPT') {
                    alert('Oh no, you have gone BANKRUPT!');
                } else {
                    alert("You have won " + indicatedSegment.text);
                }
            }


        //socket code goes here.........................................................
        // const roomName = JSON.parse(document.getElementById('room-name').textContent);

        // const chatSocket = new WebSocket(
        //     'ws://'
        //     + window.location.host
        //     + '/ws/chat/'
        //     + roomName
        //     + '/'
        // );

        // chatSocket.onmessage = function(e) {
        //     const data = JSON.parse(e.data);
        //     startSpin()
        // };

        // chatSocket.onclose = function(e) {
        //     console.error('Chat socket closed unexpectedly');
        // };



        // document.querySelector('#spin_button').onclick = function(e) {
        //     const message ="Spin";
        //     chatSocket.send(JSON.stringify({
        //         'message': message
        //     }));
        //     messageInputDom.value = '';
        // };

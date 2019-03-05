# Q-ease
Toy box to intuitively understand the fundamental theory of quantum computer.
[Click here](https://qease.herokuapp.com/bloch/index/) to go to Q ease:.

---

## Try Bloch!
Visualization of Single-Qubit Gates work with Bloch sphere.
[Click here](https://qease.herokuapp.com/bloch/try/) to play.

### How to play
- When a button imitating a single-qubit gate is pushed, the vector rotates in the Bloch sphere.
- By dragging the Bloch sphere, you can check the state of the Bloch sphere from various angles.
- We prepared a typical single-qubit gates(X,Y,Z,S†,S,T,T†X,Z,S†,S,T,T†).
- Regarding the rotation angle of each gate, please refer to [this page](https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=beginners-guide&page=introduction).
  - If you use this game together with [IBM Q's composer](https://quantumexperience.ng.bluemix.net/qx/editor), it will certainly be more fun.

---

## Challenge Bloch!
Realize Target State Using Single-Qubit Gates.
[Click here](https://qease.herokuapp.com/bloch/challenge/) to play.

### How to play
- This is a game that realizes the target state.
- First, please select difficulty level.
    - Currently, only Easy mode can be used.
- Use the GENERATE button to generate the problem.
    - The problem is randomly generated.
    - It is possible to continue generating problems until you have created the problem you want to solve.
- You properly use a single-qubit gates, bringing "Your State" closer to the "Target State". 
    - However, please make the single-qubit gates work **as few times as possible**.
- When "Your State" becomes the same state as "Target State", press the CHECK button and score. 
    - If you realize the target state with the ideal (minimum) number of steps, you will see "*CONGRATULATION！You realized the target state with the ideal number of steps!*".
    - If you realize the target state with more steps than the ideal (minimum) step number, you will see "*WELL DONE！You realized the target state with more　steps than ideal.*".
    - If you press the CHECK button without realizing the target state, you will see "*ERROR! It is not the target state.*" .
- Depending on the problem, there is not just one combination of ideal steps.

---

## Draw Gates！
Draw a Title Image Like a Quantum Qates.
[Click here](https://qease.herokuapp.com/bloch/draw/) to play.

### How to play
- Use "Bit Number" to set the number of qubits.
    - The number of qubits can be increased to four.
- Please use "Paint Gate Color and Set Text" to decide the color of the quantum gate and the text to put in it.
    - Text is limited to one character.
    - After entering the text in the box, please press the APPLY button.
- Use "Set Your Gate" to decide where to place the quantum gate you made.
    - After setting the position, please push the SET button.
- When the title is completed, let's download the png image by pushing the DOWNLOAD button.
    - Internet Explorer can not do this work([Details](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a#Browser_compatibility)).
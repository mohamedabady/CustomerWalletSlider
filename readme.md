Customer wallet Demo

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

this is a quick demo to illustrate how customer can control investment shares through a slider. 

-----------------------------

* User can input number of shares he wishes to buy through text input
* User can cnotrol number of shares through a slider 

Constraints: 
- user has a limited number of shares to buy dependeing on his Wallet Balance (Balance / Price per share).

Conditions through logic : 
$$ slider component is activated and deactivated through a switch.
$$ on deactivated >> 
          == everything returns to initial state.
          == slider and text input are disabled (not accessible).
          == slider is collapsed.
          == keyboard is dismised if Open.
$$ on activated >> 
          == text input is colored to indicate text input is enabled.
          == on focus on text input .. slider is expanded.
          == on Press on slider title .. slider is expanded.
$$ a button is added to collapse the slider. 
$$ if user enters invalid number of shares I.e : number > (Balance / Price per share)
          == wallet returns to zero 
          == investment amount is set to initia wallet amount
          == a button is shown to allow user return to maximum number of shares

Features : 
* using hooks in separate components
* slider container is flexible to contain different types of sliders 
* Project heirarchy and structure 
* Tendency to writing clean code as much as possible. 

Apk Demo download link :  https://drive.google.com/file/d/1aI-ZR6_haYaBFhNMF4cNIGqQcl3_ZZn8/view?usp=sharing
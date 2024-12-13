"use client";
//import questionStyles from "./question.module.css";

export default function Mood() {

  return (
    <div className="questionContainer">
      <p className="questionHeader">Mood Questionnaire</p>
      <br/>
        <form>
          {/*QUESTION 1: how are you feeling */}
            <p className="questionTitle">1. How are you feeling?</p>
            <div className="choicesContainer">
              <div className="leftChoiceSect">
                <input type="radio" value="happy" name="feeling_question"/> &nbsp;
                <label for="happy">Happy</label> <br/> <br/>
                
                <input type="radio" value="excited" name="feeling_question"/> &nbsp;
                <label for="excited">Excited</label> <br/> <br/>
                
                <input type="radio" value="calm" name="feeling_question"/> &nbsp;
                <label for="calm">Calm</label> 
              </div>

              <div className="rightChoiceSect">
                <input type="radio" value="sad" name="feeling_question"/> &nbsp;
                <label for="sad">Sad</label> <br/> <br/>

                <input type="radio" value="romantic" name="feeling_question"/> &nbsp;
                <label for="romantic">Romantic</label> <br/> <br/>

                <input type="radio" value="Angry" name="feeling_question"/> &nbsp;
                <label for="angry">Angry</label> 
              </div>
            </div>
            <br/> <br/>

            {/*QUESTION 2: What kind of playlist would you like? */}
            <p className="questionTitle">2. What kind of playlist would you like?</p>
            <div className="choicesContainer">
              <div className="leftChoiceSect">
                <input type="radio" value="rhythmic" name="type_question"/> &nbsp;
                <label for="rhythmic">Rhythmic</label> <br/> <br/>
                
                <input type="radio" value="energetic" name="type_question"/> &nbsp;
                <label for="energetic">Energetic</label> <br/> <br/>
                
                <input type="radio" value="groovy" name="type_question"/> &nbsp;
                <label for="groovy">Groovy</label> 
              </div>

              <div className="rightChoiceSec">
                <input type="radio" value="melancholic" name="type_question"/> &nbsp;
                <label for="melancholic">Melancholic</label> <br/> <br/>

                <input type="radio" value="lyrical" name="type_question"/> &nbsp;
                <label for="lyrical">Lyrical</label> <br/> <br/>

                <input type="radio" value="soulful" name="type_question"/> &nbsp;
                <label for="soulful">Soulful</label> 
              </div>
            </div>
            <br/>

            {/*QUESTION 3: Playlist length? */}
            <br/>
            <p className="questionTitle">3. Playlist length?</p>
            <div className="choicesContainer">
              <div className="leftChoiceSect">
                <input type="radio" value="30" name="length_question"/> &nbsp;
                <label for="30">30 min</label> <br/> <br/>
                
                <input type="radio" value="1" name="length_question"/> &nbsp;
                <label for="1">1 hour</label> <br/> <br/>
                
                <input type="radio" value="1.5" name="length_question"/> &nbsp;
                <label for="1.5">1.5 hours</label> 
              </div>

              <div className="rightChoiceSect">
                <input type="radio" value="2" name="length_question"/> &nbsp;
                <label for="2">2 hours</label> <br/> <br/>

                <input type="radio" value="2.5" name="length_question"/> &nbsp;
                <label for="2.5">2.5 hours</label> <br/> <br/>

                <input type="radio" value="surprise" name="length_question"/> &nbsp;
                <label for="surprise">Surprise me!</label> 
              </div>
            </div>
            <br/><br/>

            {/*QUESTION 4: Genre preferences?*/}
            <p className="questionTitle">4. Genre preferences?</p>
            <div className="choicesContainer">
              <div className="leftChoiceSect">
                  <input type="radio" value="rock" name="pref_question"/> &nbsp;
                  <label for="rock">Rock</label> <br/> <br/>
                  
                  <input type="radio" value="pop" name="pref_question"/> &nbsp;
                  <label for="pop">Pop</label> <br/> <br/>
                  
                  <input type="radio" value="hiphop" name="pref_question"/> &nbsp;
                  <label for="hiphop">Hip-Hop</label> 
              </div>

              <div className="rightChoiceSect">
                <input type="radio" value="rnb" name="pref_question"/> &nbsp;
                <label for="rnb">R&B</label> <br/> <br/>

                <input type="radio" value="country" name="pref_question"/> &nbsp;
                <label for="country">Country</label> <br/> <br/>

                <input type="radio" value="dance" name="pref_question"/> &nbsp;
                <label for="dance">Dance</label>
              </div>
            </div>
            <br></br><br/>

            {/*QUESTION 5: Genres to avoid? */}
            <p className="questionTitle">5. Genres to avoid?</p>
            <div className="choicesContainer">
              <div className="leftChoiceSect">
                <input type="radio" value="jazz" name="avoid_question"/> &nbsp;
                <label for="jazz">Jazz</label> <br/> <br/>
                
                <input type="radio" value="country" name="avoid_question"/> &nbsp;
                <label for="country">country</label> <br/> <br/>
                
                <input type="radio" value="hiphop" name="avoid_question"/> &nbsp;
                <label for="hiphop">Hip-Hop</label> 
              </div>

              <div className="rightChoiceSect">
                <input type="radio" value="pop" name="avoid_question"/> &nbsp;
                <label for="pop">Pop</label> <br/> <br/>

                <input type="radio" value="rock" name="avoid_question"/> &nbsp;
                <label for="rock">Rock</label> <br/> <br/>

                <input type="radio" value="rnb" name="avoid_question"/> &nbsp;
                <label for="rnb">R&B</label>
              </div>
            </div> 

            <button type="submit" className="questionBtn">Create Playlist</button>
        </form>     
    </div>
  );
}
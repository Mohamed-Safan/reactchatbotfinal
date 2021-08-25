import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Chart from "react-google-charts";

const theme = {
  background: '#98FF98',
  fontFamily: 'Gill Sans',
  headerBgColor: '#046307',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#254117',
  botFontColor: '#fff',
  userBubbleColor: '#73A16C',
  userFontColor: 'black',
};


class Graphs extends Component{
  render(){
    return (
  

  <Chart
  width={'242px'}
  height={'208px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ]}
  options={{
    title: 'graph name > sample',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    // For the legend to fit, we make the chart area smaller
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
    )


}

}

//------------------  button  ----------

const config = {
  width: "380px",
  height: "600px",
  floating: true,
}

//----------  Summary page --------------

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ' ',
      age: ' ',
      salaryanswer: ' ',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, age, salaryanswer } = steps;

    this.setState({ name, age, salaryanswer });
  }

  render() {
    const { name, age, salaryanswer } = this.state;
    return (
      <div style={{ width: '200px' }}>
        <h3>Summary</h3>
        <table>
          <tbody>

            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>

            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>

            <tr>
              <td>Salary</td>
              <td>{salaryanswer.value}</td>
            </tr>


          </tbody>
        </table>
      </div>
    );
  }
}

Summary.propTypes = {
  steps: PropTypes.object,
};

Summary.defaultProps = {
  steps: undefined,
};


////////---  Component class
class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="amanab.ico"
          userAvatar="user2.gif"
          headerTitle="Speech Synthesis,"
          speechSynthesis={{ enable: false, lang: 'en' }}
          headerTitle="AMANA"
          recognitionEnable={true}

          steps={[
            //Introduction message
            {
              id: 'select-lang',
              message: "කරුණාකර ඔබේ භාෂාව තෝරන්න",
              trigger: 'select-lang-sinhala',
              delay: 1300,
            },
            {
              id: 'select-lang-sinhala',
              message: "தயவுசெய்து உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
              trigger: 'select-lang-tami',
              delay: 1300,
            },
            {
              id: 'select-lang-tami',
              message: "Please Select your language",
              trigger: 'select-lang-one',
              delay: 1300,
            },


            // 1st Option
            {
              id: "select-lang-one",
              options: [
                { value: 'sinhala', label: 'සිංහල',trigger:"summary-graph" },
                { value: 'tamil', label: 'தமிழ்', trigger: 'tamil-lang' },
                { value: 'english', label: 'English', trigger: 'intro-eng' },
              ],
              delay: 1300,
            },


            //////////////----   ENGLISH  ---------//////////////////////

            //First question 

            {
              id: 'intro-eng',
              message: "Welcome!😊 I am Amana's virtual assistant.",
              trigger: 'start-question-english',
              delay: 1300,
            },

            {
              id: 'start-question-english',
              message: "You can discuss your future with me 🤗",
              trigger: 'start-question',
              delay: 1300,
            },

            {
              id: 'start-question',
              message: "Shell we Start ?😃",
              trigger: 'option-first',
              delay: 1300,
            },

            // 1st Option
            {
              id: "option-first",
              options: [
                { value: 'yes', label: 'Yes, Please', trigger: "yes-resp" },
                { value: 'no', label: 'No', trigger: "no-resp" },
              ],
              delay: 1300,
            },

            // no response
            {
              id: 'no-resp',
              message: 'Oh! Sorry will see next time',
              delay: 1300,
              trigger: "no-resp-ans-one",
            },

            // start again

            {
              id: 'no-resp-ans-one',
              options: [
                { value: 'again', label: 'Start again 😁', trigger: "start-question" },
              ],
              delay: 1300,
            },

            //yes response

            {
              id: "yes-resp",
              message: 'Perfect',
              delay: 1300,
              trigger: 'afterone',
            },

            {
              id: "afterone",
              message: 'How should I call you?',
              delay: 1300,
              trigger: "name",
            },

            // User response
            {
              id: "name",
              user: true,
              delay: 1300,
              trigger: "name-wish",
            },

            {
              id: "name-wish",
              message: "Wow, nice name {previousValue}",
              trigger: 'question-two',
              delay: 1300,
            },

            {
              id: "question-two",
              message: " Welcome to our Life planner! ",
              delay: 1300,
              trigger: "question-three",
            },
            {
              id: "question-three",
              message: "Let us help you plan your Future",
              delay: 1300,
              trigger: "question-four",
            },

            {
              id: "question-four",
              message: "Ready for a few questions? 😊",
              delay: 1300,
              trigger: "question-five",
            },


            // option two

            // 1st Option
            {
              id: "question-five",
              options: [
                { value: 'getstart', label: 'GET STARTED', trigger: 'future-question' },
              ],
              delay: 1300,
            },


            {
              id: "future-question",
              message: "How are you today ? 😀",
              delay: 1300,
              trigger: "answer-one",
            },


            {
              id: 'answer-one',
              options: [
                { value: 'good', label: 'GOOD 😋', trigger: 'good-question-one' },
                { value: 'bad', label: 'NOT GOOD 😑', trigger: 'bad-question' },

              ],
              delay: 1300,
            },


            {
              id: "bad-question",
              message: "I'm sorry to hear, you're having a tough time.😀",
              delay: 1300,
              trigger: "user-resp-three",

            },
            {
              id: "user-resp-three",
              message: "Is there anything i can do? 😀",
              delay: 1300,
              trigger: "answer-two",

            },


            {
              id: "answer-two",
              options: [
                { value: 'y', label: 'yes, 😋', trigger: 'qestion-yes' },
                { value: 'n', label: 'No 🙂', trigger: 'question-no' },
              ],

              delay: 1300,

            },

            {
              id: "qestion-yes",
              options: [
                { value: 'jokes', label: 'Jokes 😋 ', trigger: "jokes-ans" },
                { value: 'no', label: 'No', trigger: "jokes-no-ans" },
              ],
              delay: 1300,

            },


            {
              id: 'jokes-ans',
              component: (
                <div>DOCTOR:- Do exercise daily for good health🙄</div>
              ),
              delay: 1300,
              trigger: 'jokes-ans-two',
            },

            {
              id: 'jokes-ans-two',
              component: (
                <div>PATIENT:- Sir I play tennis, football and cricket daily..</div>
              ),
              delay: 2800,
              trigger: 'jokes-ans-three',
            },

            {
              id: 'jokes-ans-three',
              component: (
                <div>DOCTOR:- Very Good! how long do you play?</div>
              ),
              delay: 2800,
              trigger: 'jokes-ans-four',
            },


            {
              id: 'jokes-ans-four',
              component: (
                <div>PATIENT:- until the battery in my mobile goes down 🤣🤣🤣</div>
              ),
              delay: 2800,
              trigger: 'jokes-ans-five',
            },


            {
              id: 'jokes-ans-five',
              component: (
                <div>DOCTOR:- 🙄🙄🙄</div>
              ),
              delay: 2800,
              trigger: 'jokes-finish',
            },

            {
              id: 'jokes-finish',
              message: "How are you now?",
              delay: 2500,
              trigger: 'step-one',
            },


            {
              id: "step-one",
              options: [
                { value: 'fine', label: 'Now Ok, ', trigger: 'start-two' },
                { value: 'No', label: 'Not Good  ', trigger: 'stop-two' },
              ],
              delay: 1300,

            },


            {
              id: 'start-two',
              options: [
                { value: 'again', label: 'Start again 😁', trigger: "start-question" },
              ],
              delay: 1300,

            },

            {
              id: "stop-two",
              message: "Ok, will see next time, have a nice day ",
              delay: 1300,
              trigger: 'stop-three',
            },


            {
              id: "stop-three",
              options: [
                { value: 'startagain', label: 'Start again 😁', trigger: 'start-question' },

              ],
              delay: 1300,

            },



            {
              id: "question-no",
              message: "Ok, will see next time, have a nice day ",
              delay: 1300,
              trigger: 'question-no-one',
            },


            {
              id: "question-no-one",
              options: [
                { value: 'startagain', label: 'Start again 😁', trigger: 'start-question' },

              ],
              delay: 1300,

            },


            {
              id: "jokes-no-ans",
              message: "Oh sorry ! will see next time ",
              delay: 1300,
              trigger: 'question-no-two',
            },

            {
              id: "question-no-two",
              options: [
                { value: 'startagain', label: 'Start again 😁', trigger: 'start-question' },

              ],
              delay: 1300,

            },


            ////////////  Main questions   /////////////




            {
              id: "good-question-one",
              message: "I need to ask you few simple Questions 🙂",
              delay: 1300,
              trigger: "main-question-one"
            },



            {
              id: "main-question-one",
              message: "Are you ready? 😃",
              delay: 1300,
              trigger: "main-question-two"
            },

            {
              id: 'main-question-two',
              options: [
                { value: 'ready', label: 'Yes, I am ready... 😁', trigger: "future-look" },

              ],
              delay: 1300,

            },

            {
              id: 'future-look',
              message: "Ok, Please select an Option ",
              delay: 1300,
              trigger: "future-look-one"

            },



            {
              id: 'future-look-one',
              options: [
                { value: 'futurelooks', label: 'Tell me how my future looks ? 😁', trigger: "future-look-two" },
                { value: 'predication', label: 'how does "LIFE PLANNER"  do the predication 😃' },
                { value: 'aboutamana', label: 'What is special about Amana bank 😊' }


              ],
              delay: 1300,

            },


            {
              id: "future-look-two",
              message: "What is your age ? 🧐",
              delay: 1300,
              trigger: "age",

            },

            //        ],
            //     delay:1300,

            {
              id: "age",
              validator: (age) => {
                if (isNaN(age)) {
                  return 'Age should be a number';
                }
                if (isNaN(age) || age < 1 || age > 100) {
                  return "Age must be a number between 1 to 100";

                }
                return true;
              },
              user: true,
              delay: 1500,
              trigger: "write-age-one"
            },

            {
              id: "write-age-one",
              delay: 1500,
              message: "oh Okk 😎",
              trigger: "future-question-start",
            },

            {
              id: "future-question-start",
              delay: 1500,
              message: "I will help you to predict your financial position",
              trigger: "future-question-one",
            },

            {
              id: "future-question-one",
              delay: 1500,
              message: "First, I need to understand your future goals.",
              trigger: "future-question-two",
            },


            {
              id: "future-question-two",
              delay: 1500,
              message: "Can you please select one of the goals below...",
              trigger: "future-question-three",
            },


            {
              id: 'future-question-three',
              options: [
                { value: 'house', label: 'HOUSE 🏡', trigger: 'house-question-one' },
                { value: 'education', label: 'EDUCATION 👨‍🎓' },
                { value: 'vehicle', label: 'VEHICLE 🚗' },
                { value: 'wedding', label: 'WEDDING 👭' },
                { value: 'retirement', label: 'RETIREMENT' },


              ],
              delay: 1300,

            },

            {
              id: "house-question-one",
              delay: 1500,
              message: "You have selected {previousValue}",
              trigger: "house-question-two",
            },

            {
              id: "house-question-two",
              delay: 1500,
              message: "When are you planning to buy your dream house?",
              trigger: "house-question-three",
            },

            {
              id: 'house-question-three',
              options: [
                { value: 'thisyear', label: 'This Year', trigger: "house-question-four" },
                { value: 'towthree', label: 'Within 2-3 years', trigger: "house-question-four" },
                { value: 'fourfive', label: 'Within 5 years', trigger: "house-question-four" },
              ],
              delay: 1300,


            },

            // same reply 1
            {
              id: "house-question-four",
              delay: 1500,
              message: "Superb",
              trigger: "house-question-saven",
            },
            // same reply 2
            // {
            //   id: "house-question-five",
            //   delay: 1500,
            //   message: "Superb",
            //  trigger: "house-question-eight",
            //  },
            // same reply 3
            // {
            //   id: "house-question-six",
            //   delay: 1500,
            //   message: "Superb",
            //trigger: "house-question-nine",
            //   },


            // asking salary  # 1
            {
              id: "house-question-saven",
              delay: 1500,
              message: "May I know your monthly Income ? Rs..",
              trigger: "salaryanswer"
            },

            // User answer
            {
              id: "salaryanswer",
              user: true,
              delay: 1300,
              validator: (value) => {
                if (isNaN(value)) {
                  return 'Salary should be a number';
                }
                if (isNaN(value) || value < 1000) {
                  return "Salary must be above Rs 1000 ";
                }
                return true;
              },
              trigger: "salary-user-answer-one",
            },


            {
              id: "salary-user-answer-one",
              message: "What is your annual salary increment rate? ",
              delay: 1300,
              trigger: "salary-user-answer-two"
            },


            {
              id: 'salary-user-answer-two',
              options: [
                { value: 'less5', label: 'Less than 5%', trigger: "summary" },
                { value: '5to10', label: '5-10 %', trigger: "summary" },
                { value: '10to15', label: '10-15 %', trigger: "summary" },
                { value: '15plus', label: 'more than 15%', trigger: "summary" },
                { value: 'annual', label: 'what is Annual salary increment rate? 🙄', trigger: "salary-inc" },
              ],
              delay: 1300,

            },

            {
              id: "salary-inc",
              component: (
                <div> Percentage of salary increase each year </div>
              ),
              delay: 1300,
              trigger: "salary-user-answer-one"

            },

            {
              id: "summary",
              message: "Summary of your details 👇",
              trigger: "summary-end",
              delay: 1300,
            },

            {
              id: "summary-end",
              trigger: "summary-end",
              component: <Graphs />,
              asMessage: true,
              delay: 1300,
              end: true,

            },


            {
              id: "summary-graph",
              message: "Graph👇",
              trigger: "summary-end-graph",
              delay: 1300,
            },

            {
              id: "summary-end-graph",
              trigger: "summary-end",
              component: <Graphs />,
              asMessage: false,
              delay: 1300,
              end: true,

            },



            //////// ---------------   தமிழ்    ------------/////////////// 



            {
              id: 'tamil-lang',
              message: "வணக்கம்😃, நான் ஆமானாவின் அசிஸ்டண்ட்.",
              trigger: 'tamil-language-one',
              delay: 1300,

            },
            {
              id: 'tamil-language-one',
              message: "உங்களது எதிர்காலத்தை பற்றி நீங்கள் என்னுடன் காலந்துரையாடலாம்🤗",
              trigger: 'tamil-language',
              delay: 1300,

            },

            {
              id: 'tamil-language',
              message: " ஆரம்பிப்போமா ? 🤔",
              trigger: 'option-first-tamil',
              delay: 1300,

            },

            // 1st Option tamil
            {
              id: 'option-first-tamil',
              options: [
                { value: 'yestamil', label: 'ஆம், ஆரம்பிப்போம்', trigger:"yes-resp-tamil" },
                { value: 'notamil ', label: 'இல்லை, வேண்டாம் ', trigger: "no-resp-tamil" },
              ],
              delay: 1300,
            },

            // no response
            {
              id: 'no-resp-tamil',
              message: 'மன்னிக்கவும், அடுத்த முறை சந்திப்போம்... ',
              delay: 1300,
              trigger: "no-resp-ans-one-tamil",
            },

            // start again

            {
              id: 'no-resp-ans-one-tamil',
              options: [
                { value: 'againtamil', label: 'மீண்டும் ஆரம்பிக்கவும் 😁', trigger: "tamil-language" },
              ],
              delay: 1300,
            },

            //yes response

            {
              id: "yes-resp-tamil",
              message: 'நன்று',
              delay: 1300,
              trigger: 'afterone-tamil',
            },

            {
              id: "afterone-tamil",
              message: 'நான் உங்களை எவ்வாறு கூப்பிட வேண்டும்? 🙂',
              delay: 1300,
              trigger: "nametamil",
            },
            {
              id: "nametamil",
              user: true,
              delay: 1300,
              trigger: "name-wish-tamil",
            },
            {
              id: "name-wish-tamil",
              message: "ஆஹா, {previousValue} உங்களது பெயர் இனிமையாக உள்ளது  ",
              trigger: 'question-two-tamil',
              delay: 1300,
            },
            {
              id: "question-two-tamil",
              message: "எதிர்காலத்தை திட்டமிடும் செயலிக்கு உங்களை வரவேற்க்கிறோம்.",
              delay: 1300,
              trigger: "question-three-tamil",
            },

            {
              id: "question-three-tamil",
              message: "உங்களது எதிர்காலத்தை திட்டமிட நாங்கள் உங்களுக்கு உதவுகிறோம் ",
              delay: 1300,
              trigger: "question-four-tamil",
            },

            {
              id: "question-four-tamil",
              message: "சில கேள்விகளுக்கு தயாராக இருக்கிறீர்களா?😊",
              delay: 1300,
              trigger: "question-five-tamil",
            },

             // option two

            // 1st Option
            {
              id: "question-five-tamil",
              options: [
                { value: 'getstarttamil', label: 'ஆரம்பியுங்கள்', trigger: 'future-question-tamil' },
              ],
              delay: 1300,
            },
            {
              id: "future-question-tamil",
              message: "நீங்கள் இன்று எவ்வாறு இருக்கிறீர்கள் 😀",
              delay: 1300,
              trigger: "answer-one-tamil",
            },

            {
              id: 'answer-one-tamil',
              options: [
                { value: 'goodtamil', label: 'நன்றாக உள்ளேன்😋' },
                { value: 'badtamil', label: 'நன்றாக இல்லை😑', trigger: 'bad-question-tamil' },

              ],
              delay: 1300,
            },

            {
              id: "bad-question-tamil",
              message: "ஓஹ், வருந்துகிரேன். உங்களுக்கு இது கஷ்டமான காலம் என்று நினைக்கிறேன்😀",
              delay: 1300,
              trigger: "user-resp-three-tamil",

            },
            {
              id: "user-resp-three-tamil",
              message: "நான் ஏதாவது செய்ய வேண்டுமா? 😀",
              delay: 1300,
              trigger: "answer-two-tamil",
            },

            {
              id: "answer-two-tamil",
              options: [
                { value: 'yt', label: 'ஆம் , 😋', trigger:"qestion-yes-tamil"},
                { value: 'nt', label: 'வேண்டாம்  🙂'},
              ],

              delay: 1300,

            },

            {
              id: "qestion-yes-tamil",
              options: [
                { value: 'jokest' , label: 'காமடிகள் 😋',trigger: "jokes-ans-tamil" },
                { value: 'not', label: 'வேண்டாம் ' },
              ],
              delay: 1300,

            },


            {
              id: 'jokes-ans-tamil',
              component: (
                <div>DOCTOR:- Do exercise daily for good health🙄</div>
              ),
              delay: 1300,
             trigger: 'jokes-ans-two-tamil',
            },


            {
              id: 'jokes-ans-two-tamil',
              component: (
                <div>PATIENT:- Sir I play tennis, football and cricket daily..</div>
              ),
              delay: 2800,
              // trigger: 'jokes-ans-three-tamil',
            },







          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }

}

export default SimpleForm;
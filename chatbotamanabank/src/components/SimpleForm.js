import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';




class SimpleForm extends Component {
  render() {
    return (
        <ChatBot
        headerTitle="Speech Synthesis,"
        speechSynthesis={{ enable: false, lang: 'en' }}
        headerTitle="AMANA"
        recognitionEnable={true}


       
         steps={[

            //Introduction message
           {
            id:'intro', 
            message:"Welcome!😊   \n I am Amana's virtual assistant.", 
            trigger:'select-lang',
            delay:1300,
           },


           {
            id:'select-lang', 
            message:"Please Select your language ", 
            trigger:'select-lang-one',
            delay:1300,

           },

             // 1st Option
             {
                id:"select-lang-one",
                options: [
                    { value: 'sinhala', label: 'සිංහල' },
                    { value: 'tamil', label: 'தமிழ்' , trigger: 'tamil-language' },
                    { value: 'english', label: 'English' , trigger:'start-question'},


                  ],
                delay:1300,
              },


              //////////////----   ENGLISH  ---------//////////////////////

             //First question 
           {
             id:'start-question',
             message: "Shell we Start ?😃",
             trigger:'option-first',
             delay:1300,
           },

              // 1st Option
              {
                id:"option-first",
                options: [
                    { value: 'yes', label: 'Yes, Please', trigger:"yes-resp"  },
                    { value: 'no', label: 'No', trigger:"no-resp" },
                  ],
                delay:1300,
              },


              // no response
              {
                id: 'no-resp',
                message: 'Oh! Sorry will see next time',
                delay:1300,
                trigger : "no-resp-ans-one",
                
                
              },
                  
              // start again

              {
                id: 'no-resp-ans-one',
                options: [
                    { value: 'again', label: 'Start again 😁',trigger : "start-question" },                  
                      ],
                delay:1300,
                
    
              },
              


              //yes response

              {
                id:"yes-resp",
                message:'Perfect',
                delay:1300,
                trigger:'afterone',
              },

              {
                id:"afterone",
                message:'How should I call you?',
                delay:1300,
                trigger:"write-name",
              },

                     // User response
              {
                  id: "write-name",
                  user:true,
                  delay:1300,
                  trigger: "name-wish"

              },

              {
                  id:"name-wish",
                  message: "Wow, nice name {previousValue}", 
                  trigger:'question-two',
                  delay:1300,
              },

              {
                 id:"question-two",
                 message: " Welcome to our Life planner {previousValue}",
                 delay:1300,
                 trigger:"question-three",
              },
              {
                id:"question-three",
                message: "Let us help you plan your Future",
                delay:1300,
                trigger:"question-four",
             },

             {
                id:"question-four",
                message: "Ready for a few question {previousValue}",
                delay:1300,
                trigger:"question-five",
             },


             // option two

              // 1st Option
              {
                id:"question-five",
                options: [
                    { value: 'getstart', label: 'GET STARTED', trigger: 'future-question'  },
                  ],
                delay:1300,
              },

                   
              {
                id: "future-question",
                message: "How are you today ? 😀",
                delay:1300,
                trigger:"answer-one",
              },


              {
                 id: 'answer-one',
                 options: [
                     { value: 'good', label: 'GOOD 😋'  },
                     { value: 'bad', label: 'BAD 😑', trigger: 'bad-question'  },

                       ],
                 delay:1300,
               },


               {
                id: "bad-question",
                message: "I'm sorry to hear you're having a tough time.😀",
                delay:1300,
                trigger:"user-resp-three",

               },
               {
                id: "user-resp-three",
                message: "Is there anything i can do? 😀",
                delay:1300,
                trigger:"answer-two",

               },


               {
                   id:"answer-two",
                   options: [
                    { value: 'y', label: 'yes, 😋', trigger: 'qestion-yes'},
                    { value: 'n', label: 'No 🙂', trigger: 'question-no'   },
                      ],

                     delay:1300, 

               },
               
               {
                id: "qestion-yes",
                options: [
                    { value: 'jokes', label: 'Jokes 😋 ', trigger: "jokes-ans"  },
                    { value: 'no', label: 'No', trigger: "jokes-no-ans"  },
                      ],
                delay:1300,

               },


               {
               id: 'jokes-ans',
               message: "What did one traffic light say to the other?🙄",
               delay:2500,
               trigger:'jokes-ans-two',
               },

               {
                id: 'jokes-ans-two',
                message: "Stop looking! I am changing! 🤣🤣",
                delay:2500,
                trigger:'jokes-finish',
                },
                   

                {
                    id: 'jokes-finish',
                    message: "How are you now?",
                    delay:2500,
                    trigger:'step-one',
                    },


                    {
                        id: "step-one",
                        options: [
                            { value: 'fine', label: 'Now Ok, '  },
                            { value: 'No', label: 'Not Good  '  },
                           ],
                        delay:1300,
        
                       },




                       {
                           id:"question-no",
                           message: "Ok, will see next time, have a nice day ", 
                           delay:1300,
                           trigger:'question-no-one',
                       },


                       {
                        id: "question-no-one",
                        options: [
                            { value: 'startagain', label: 'Start again 😁',trigger: 'start-question'  },
                           
                           ],
                        delay:1300,

                       },


                       {
                        id:"jokes-no-ans",
                        message: "Oh sorry ! will see next time ", 
                        delay:1300,
                        trigger:'question-no-two',
                    },

                    {
                        id: "question-no-two",
                        options: [
                            { value: 'startagain', label: 'Start again 😁',trigger: 'start-question'  },
                           
                           ],
                        delay:1300,

                       },


                       ////////////  Main questions   /////////////

          
          
          
        //  {
        //     id: "option-first-tamil",
        //     message: "Please selact an opction 🙂",
        //     delay:1300,
            // trigger: "main-question-one"
        //  },

    //      {
    //      id:'main-question-one',
    //      options: [
    //         { value: 'futureone', label: 'Tell me how my future looks ? 😁'  },
    //         { value: 'futureone', label: 'Tell me how my future looks ? 😁'  }

           
    //        ],
    //     delay:1300,

    //    },

                  

//////// ---------------   தமிழ்    ------------/////////////// 
 
                                    
                            
{
    id:'tamil-language',
    message: "வணக்கம்!  ஆரம்பிப்போமா ? 🤔",
    trigger:'option-first-tamil',
    delay:1300,
    
  },



  // 1st Option
  {
    id:'option-first-tamil',
    options: [
        { value: 'yestamil', label: 'ஆம், ஆரம்பிப்போம்  ' },
        { value: 'notamil ', label: 'இல்லை, வேண்டாம் '},
      ],
    delay:1300,
  },



















            






        

    





           ]}
        />
      );
  }
       
}

export default SimpleForm;
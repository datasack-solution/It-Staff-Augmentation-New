import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent, FunctionComponent } from "react";
import ChatBotIcon from "./ChatBotIcon";
import Slider, { Settings } from 'react-slick';

interface Message {
  sender: "user" | "bot";
  text: string;
  time: string
}

interface UserDetails {
  name: string;
  email: string;
  country:string
}

interface Question {
  id: number;
  question: string;
  answer: string;
}
const currentTime = new Date().getHours() 
const greet = currentTime < 12 ? 'Good Morning' : currentTime >=12 && currentTime<=18 ? 'Good Afternoon' : 'Good Evening'

const positiveResponses: Record<string, string[]> = {
  "ok": [
    "Yay! Glad to help! 😊",
    "Okay! You're awesome! 🙌",
    "Great! 😄 Anything else I can do?"
  ],
  "okay": [
    "Awesome! 🙌",
    "Got it! 😄",
    "Perfect! 😎"
  ],
  "thank you": [
    "You're welcome! 😊",
    "Glad to help! 🌟",
    "Anytime! 😁"
  ],
  "thanks": [
    "You're very welcome! 😊",
    "No problem, happy to help! 😄",
    "You're the best! 👏"
  ],
  "thanks a lot": [
    "You're too kind! 😊",
    "Thanks for the kind words! 😄",
    "It's my pleasure! 😁"
  ],
  "thanks so much": [
    "You're welcome, anytime! 🌟",
    "Happy to help! 😃",
    "You made my day! 😊"
  ],
  "thank you so much": [
    "You're very welcome! 💖",
    "I'm here to help anytime! 😄",
    "So happy to help! 😊"
  ],
  "much appreciated": [
    "You're amazing! 😄",
    "It's my pleasure! 🌟",
    "So glad I could help! 😊"
  ],
  "thanks a million": [
    "You're the best! 😁",
    "You're very welcome! 💖",
    "Anytime! 😄"
  ],
  "you're the best": [
    "Aww, you're the best too! 😁",
    "Thank you! 😊 You're awesome! 🌟",
    "You're making me smile! 😊"
  ],
  "appreciate it": [
    "I appreciate you too! 😄",
    "It's always a pleasure to help! 😊",
    "Glad to help anytime! 🙌"
  ],
  "great": [
    "You're awesome! 😎",
    "Great to hear! 😄",
    "Everything is going great! 🎉"
  ],
  "perfect": [
    "You're perfect! 😄",
    "Glad to hear! 😁",
    "Everything's going perfect! 🌟"
  ],
  "awesome": [
    "You're awesome too! 😁",
    "Glad you think so! 😄",
    "We're on a roll! 🙌"
  ],
  "no problem": [
    "It's no problem at all! 😊",
    "Anytime! 😄",
    "Glad to be of help! 🌟"
  ],
  "sure": [
    "Of course! 😄",
    "You got it! 🙌",
    "Absolutely! 😊"
  ],
  "sounds good": [
    "That sounds awesome! 😎",
    "Great, let's do it! 🌟",
    "I'm on board! 😄"
  ],
  "all good": [
    "Glad to hear that! 😊",
    "All good here too! 😄",
    "Everything's going great! 🙌"
  ],
  "understood": [
    "Got it! 😊",
    "I understand, no worries! 😎",
    "Perfectly understood! 🌟"
  ],
  "have a nice day": [
    "You too have a nice day! 😊🙌"
  ],
  "cool": [
    "Cool indeed! 😎",
    "You're rocking it! 🎸",
    "That's super cool! 😁"
  ],
  "what is your name": [
    "I'm your live bot assistant. 😊"
  ],
  "bye": [
    "I'm here if you need anything else! 😊"
  ],
  "tata": [
    "I'm here if you need anything else! 😊"
  ],
  "see you later": [
    "I'm here if you need anything else! 😊"
  ],
  'no': [
    'Got it!'
  ],
  "good morning":[
 `${greet} !`
  ],
  "good afternoon":[
 `${greet} !`
  ],
  'good evening':[
 `${greet} !`
  ]
};

const getHappyResponse = (input: string): string | undefined => {
  const normalizedInput = input.toLowerCase();

  for (const [expression, responses] of Object.entries(positiveResponses)) {
    if (normalizedInput.includes(expression)) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return randomResponse;
    }
  }


  // return "I'm here if you need anything else! 😊";
  return undefined
};



// const defaultQuestions: Question[] = [
//   { id: 1, question: "What can I help you with today?", answer: "I'm here to assist with any questions or concerns you have!" },
//   { id: 2, question: "Tell me more about your issue.", answer: "Could you please provide more details on the issue you're experiencing?" },
//   { id: 3, question: "Do you need technical support?", answer: "Our technical support team is available to help with any technical issues." },
//   { id: 4, question: "Are you interested in our products?", answer: "We offer a range of products. Let me know if you'd like more information!" },
//   { id: 5, question: "Would you like information on our services?", answer: "I can provide detailed information on our services. Just ask!" },
//   { id: 6, question: "Do you have an account with us?", answer: "If you have an account, I can assist you further with your queries." },
//   { id: 7, question: "How soon do you need assistance?", answer: "Let us know your timeline, and we'll do our best to assist you promptly." },
//   { id: 8, question: "Would you like to connect with an agent?", answer: "Thank you! We will connect you with an agent shortly." },
//   { id: 9, question: "Can I help you with anything else?", answer: "Feel free to ask any other questions you may have." },
//   { id: 10, question: "Thank you for reaching out!", answer: "You're welcome! Have a great day!" },
// ];


const defaultQuestions: Question[] = [
  {
    id: 1,
    question: "What is IT Staff Augmentation?",
    answer: "IT Staff Augmentation is a flexible hiring model that allows you to add skilled tech professionals to your team on a temporary or long-term basis, helping you scale your workforce quickly based on project needs."
  },
  {
    id: 2,
    question: "How can IT Staff Augmentation benefit my business?",
    answer: "IT Staff Augmentation offers flexibility, cost savings, and access to a global talent pool. It enables you to fill skill gaps quickly, scale up or down based on project requirements, and avoid the lengthy hiring process."
  },
  {
    id: 3,
    question: "What types of roles can be filled with IT Staff Augmentation?",
    answer: "You can fill a wide range of roles, including software developers, project managers, business analysts, UX/UI designers, data engineers, and more, based on the specific requirements of your project."
  },
  {
    id: 4,
    question: "How do you select and vet IT staff for my project?",
    answer: "We thoroughly vet candidates through a multi-step process, including technical assessments, interviews, and background checks, to ensure they meet the skill requirements and fit your team's culture."
  },
  {
    id: 5,
    question: "What's the difference between IT Staff Augmentation and outsourcing?",
    answer: "In IT Staff Augmentation, the augmented staff works as part of your team, following your processes and management. With outsourcing, an external team manages the entire project or task independently."
  },
  {
    id: 6,
    question: "How long does it take to onboard augmented staff?",
    answer: "Onboarding time varies depending on the role and skill level, but we aim to provide qualified candidates within a few days, ensuring a smooth and efficient transition into your team."
  },
  {
    id: 7,
    question: "Can I scale the team up or down easily with this service?",
    answer: "Yes, IT Staff Augmentation is designed for scalability. You can increase or reduce the team size as your project evolves, providing flexibility and cost control."
  },
  {
    id: 8,
    question: "Can I connect with an expert to discuss my specific needs?",
    answer: "Absolutely! We can connect you with an expert to discuss your project requirements in detail. Please let us know, and we will arrange a call for you."
  },
  {
    id: 9,
    question: "What is the cost structure for IT Staff Augmentation services?",
    answer: "The cost depends on the skills, experience level, and duration required. We provide transparent, competitive rates tailored to your specific staffing needs."
  },
  {
    id: 10,
    question: "How can I get started with IT Staff Augmentation?",
    answer: "To get started, you can provide us with details of your requirements, and we'll match you with the right candidates. Our team will guide you through the process from start to finish."
  },
  {
    id: 11,
    question: "Connect with agent",
    answer: "Thank you. We will further contact you."
  },
];

const connectWithAgentId = 8;

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours}:${strMinutes} ${ampm}`;
};

const ChatScreen: FunctionComponent<{
  onClose: () => void
}> = ({
  onClose
}) => {
    const initialTime = formatTime(new Date())
    const [messages, setMessages] = useState<Message[]>([{
      sender:'bot',
      text:'Please, Enter your name.',
      time:initialTime
    }],);
    const [userInput, setUserInput] = useState<string>("");
    const [step, setStep] = useState<number>(0);
    const [loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState<UserDetails>({ name: "", email: "",country:"" });
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);
    const [isMinimized, setIsMinimized] = useState(false);

console.log("messages: ",messages)


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();

      const chatElement = chatRef.current;
      if (!chatElement) return;


      // Determine if this is a mouse or touch event
      const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const startY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      const initialX = startX - chatElement.getBoundingClientRect().left;
      const initialY = startY - chatElement.getBoundingClientRect().top;

      const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
        if (!chatElement) return;

        const currentX = 'clientX' in moveEvent ? moveEvent.clientX : moveEvent.touches[0].clientX;
        const currentY = 'clientY' in moveEvent ? moveEvent.clientY : moveEvent.touches[0].clientY;

        chatElement.style.left = `${currentX - initialX}px`;
        chatElement.style.top = `${currentY - initialY}px`;
      };

      const handleEnd = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };

      // Attach both mouse and touch event listeners
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    };



    useEffect(() => {
      const chatElement = chatRef.current;

      if (!isMinimized) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }

      if (chatElement) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Always make sure chatElement is not off the screen
        const chatWidth = chatElement.offsetWidth;
        const chatHeight = chatElement.offsetHeight;

        // Adjust position when the chat is not minimized
        if (!isMinimized) {
          chatElement.style.top = `${viewportHeight - chatHeight - 20}px`;
          chatElement.style.left = `${Math.max(viewportWidth - chatWidth - 20, 0)}px`;
        } else {
          // Minimized state positioning for mobile, tablet, and desktop
          if (viewportWidth < 640) {
            // For extra small screens, keep chat within the viewport with a small margin
            chatElement.style.top = `${viewportHeight - chatHeight - 20}px`;
            chatElement.style.left = `${viewportWidth - chatWidth - 20}px`; // Ensure it's not off the screen
          } else if (viewportWidth >= 640 && viewportWidth < 768) {
            // For small screens (sm, tablet), keep chat window visible
            chatElement.style.top = `${viewportHeight - chatHeight - 20}px`;
            chatElement.style.left = `${Math.max(viewportWidth - chatWidth - 20, 20)}px`; // Ensure it's not off the screen
          } else if (viewportWidth >= 768 && viewportWidth < 1024) {
            // For medium screens (md, smaller laptops)
            chatElement.style.top = '95%';
            chatElement.style.left = '70%';
            chatElement.style.transform = 'translateX(-50%)';
          } else if (viewportWidth >= 1024 && viewportWidth < 1280) {
            // For large screens (lg, desktops)
            chatElement.style.top = '95%';
            chatElement.style.left = '80%';
            chatElement.style.transform = 'translateX(-50%)';
          } else if (viewportWidth >= 1280) {
            // For extra-large screens (xl)
            chatElement.style.top = '95%';
            chatElement.style.left = '70%';
            // chatElement.style.transform = 'translateX(-50%)';
          }
        }
      }
    }, [isMinimized]);


    const handleMinimize = () => {
      setIsMinimized((prev) => !prev);
    };


    console.log(userDetails)

    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      variableWidth: true,
      slidesToScroll: 1,
      nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
      ,
      prevArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
      </svg>,

    };

    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleUserSubmit = (message: string) => {   //we are getting question id
      const rawtime = new Date()
      const time = formatTime(rawtime)
      const addBotMessage = (text: string, nextStep?: number) => {
        setLoading(true);
        setMessages((prev) => [...prev, { sender: "bot", time, text: "loading" }]);

        setTimeout(() => {
          setLoading(false);
          setMessages((prev) => [...prev.slice(0, -1), { sender: "bot", time, text }]);
          if (nextStep !== undefined) setStep(nextStep);
        }, 500);
      };


      if (step !== 0 && step !== 1 && step!==2) {
        setMessages([...messages, { sender: "user", time, text: defaultQuestions.find(e => e.id == parseInt(message) || e.question.toLowerCase().includes(message.toLowerCase()))?.question || message }]);
      } else {
        setMessages([...messages, { sender: 'user', time, text: message }])
      }

      setUserInput("");

      const gotQuestion = defaultQuestions.find(e => e.question.toLowerCase().includes(message.toLowerCase()))

      const happyResponse = getHappyResponse(message)

   
      if (step === 0) {
        setUserDetails((prev) => ({ ...prev, name: message }));
        addBotMessage(`Hi ${message}, Please enter your email.`, 1);

      } else if (step === 1) {
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const isValid = emailPattern.test(message.trim())
          if (!isValid){
            setStep(1)
            addBotMessage('Oops, Please give a valid email!', 1)
            return
          }

        setUserDetails((prev) => ({ ...prev, email: message }));
        // addBotMessage("Thank you 😊, How can I assist you today? ", 2);
        addBotMessage("Which country are you from?",2)

      }else if (step===2){
        setUserDetails((prev) => ({ ...prev, country: message }));
        addBotMessage("Thank you 😊, How can I assist you today? ", 3);
      }
      
      else {
        const questionId = parseInt(message);
        if (!isNaN(questionId) && questionId >= 1 && questionId <= defaultQuestions.length) {
          const selectedQuestion = defaultQuestions.find((q) => q.id === questionId);
          if (selectedQuestion) {
            if (selectedQuestion.id === connectWithAgentId) {
              addBotMessage(`${selectedQuestion.answer}\nThank you! We will contact you soon.`);
              // setStep(-1);
            } else {
              addBotMessage(selectedQuestion.answer);
            }
          }
        } else if (gotQuestion) {
          addBotMessage(gotQuestion.answer)
        } else if (happyResponse) {
          addBotMessage(happyResponse)
        } else {
          addBotMessage("Please select a question by typing the corresponding number, or type 'connect with agent' to talk to an agent.");
        }
      }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setUserInput(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && userInput.trim() !== "") {
        handleUserSubmit(userInput);
      }
    };

    return (
      <div id="chatscreen" ref={chatRef}
        className={`fixed bottom-0 max-h-screen ${isMinimized ? 'h-12' : 'h-2/3'
          } z-[70] xs:right-5 right-0 w-80 md:w-96  bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-t-3xl flex flex-col`}
      >
        <div className={`bg-white dark:bg-gray-900 py-3 px-4 rounded-t-3xl flex items-center justify-between hide-scrollbar touch-pan-x drag-handle 
        ${isMinimized ? 'cursor-default' : 'cursor-move'}
        `} onMouseDown={(e) => {
            if (!isMinimized)
              handleMouseDown(e)
          }}
          onTouchStart={(e) => {
            if (!isMinimized)
              handleMouseDown(e)
          }}
        >

          <h2 className="text-lg font-semibold xs:text-sm sm:text-base lg:text-lg text-gray-800 dark:text-white text-nowrap">
            Chat with Our <span className="text-orange-500">Support Team</span>
            <div className="flex align-middle justify-center p-[2px] rounded-3xl px-1 w-fit gap-2">
              <div className="w-2 h-2 rounded-full bg-green-700 animate-ping m-auto"></div>
              <p className="text-xs font-light dark:text-white">online</p>
            </div>
          </h2>


          <div className="flex items-center space-x-2 -mt-5">
            {/* Minimize button */}
            <button onClick={handleMinimize} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              {!isMinimized ? <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
              </svg>
              }
            </button>
            {/* Close button */}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              &#10005;
            </button>
          </div>


        </div>

        <div className="flex-1 p-4 overflow-y-auto hide-scrollbar space-y-4">
          <div className="text-xs w-full m-auto text-center dark:text-white">To assist you further, could you please provide your Name, Email, and Country? This will help us offer a more personalized experience. Thank you!</div>
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "bot" && (
                <div className="flex">
                  <div className="flex-grow-0">
                    <ChatBotIcon key={index} className={`mr-2  rounded-full size-8 p-1 bg-gray-400 ${(loading && msg.text == 'loading') ? 'animate-bounce' : 'animate-none'}`} onClick={() => { }} />
                  </div>
                  {msg.text !== 'loading' ? <div>
                    <div className="bg-orange-500 text-white p-3 rounded-xl text-sm max-w-xs">
                      <p>{msg.text}</p>
                      {/* <TypeAnimation
                        sequence={[
                          msg.text,
                          3000,
                        ]}
                        wrapper="span"
                        cursor={false}
                        speed={80}
                      /> */}
                    </div>
                    <p className="float-right mt-1 text-xs">{msg.time}</p>
                  </div>
                    : <div className="animate-pulse rounded-xl text-center justify-center m-auto">
                      <div className="flex gap-1 animate-bounce">
                        <div className="w-1 h-1 bg-orange-500"></div>
                        <div className="w-1 h-1 bg-orange-500"></div>
                        <div className="w-1 h-1 bg-orange-500"></div>
                      </div>
                    </div>}
                </div>
              )}
              {msg.sender === "user" && (
                <div> <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl text-sm text-gray-800 dark:text-white max-w-xs">
                  {msg.text}
                </div>
                  <p className="float-start mt-1 text-xs">{msg.time}</p>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {step === 3 && (
          <div className="h-10 px-7 overflow-hidden flex">
            <Slider {...settings} className="relative w-full whitespace-nowrap hide-scrollbar">
              {defaultQuestions.map((question) => (
                <div key={question.id} className="w-auto flex-shrink-0">
                  <button
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-2 px-4 rounded-full text-xs"
                    onClick={() => {
                      if (!loading) handleUserSubmit(String(question.id));
                    }}
                  >
                    {question.id}.{question.question}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        )}


        <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center bg-white dark:bg-gray-900">
          <input
            type="text"
            placeholder={(step == 0 && "Enter your name") || (step == 1 && 'Enter your email') || "Type your message"}
            className="w-full bg-transparent focus:outline-none text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={(e) => !loading && handleKeyPress(e)}
            autoFocus={!isMinimized}
            disabled={isMinimized}
          />
          <button
            disabled={loading}
            onClick={() => {
              if (!loading && userInput) {
                handleUserSubmit(userInput)
              }
            }}
            className="ml-2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          >
            &#10148;
          </button>
        </div>
      </div>
    );
  };

export default ChatScreen;

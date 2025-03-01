import React, { ChangeEvent, FunctionComponent, KeyboardEvent, useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useCallUsModalState } from "./CallUsContext";
import ChatBotIcon from "./ChatBotIcon";
import emailJs from '@emailjs/browser';

interface Message {
  sender: "user" | "bot";
  text: string;
  time: string
}

const publicKey = '8TwxGIOLSaBZeH7Dk'
const serviceId='service_7wgr0bg'
const templateMsgId = 'template_4madn88'

const sendChatsToEmail = async(messages:Message[]) => {
  const clientName=messages[2].text
  const formattedMessages = messages.map(msg => ({
    ...msg,
    sender: msg.sender === 'user' ? 'User' : 'Bot',  // replace 'user' and 'bot' with 'User' or 'Bot' for a better view
  }));

  const templateParams = {
    clientName,
    messages:formattedMessages, 
  };

  try{
    await emailJs.send(serviceId, templateMsgId, templateParams, publicKey);
  }catch(e){
    console.log("error on sending mail..",e)
  }
}

interface Question {
  id: number;
  question: string;
  answer: string;
}
const currentTime = new Date().getHours()
const greet = currentTime < 12 ? 'Good Morning' : currentTime >= 12 && currentTime <= 18 ? 'Good Afternoon' : 'Good Evening'

const positiveResponses: Record<string, string[]> = {
  "ok": [
    "Yay! Glad to help! 😊",
    "Okay! You're awesome! 🙌",
    "Got it! 😄",
    "Glad to help! 🌟",
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
  "good morning": [
    `${greet} !`
  ],
  "good afternoon": [
    `${greet} !`
  ],
  'good evening': [
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

  return undefined
};


const defaultQuestions1: Question[] = [
  {
    id: 1,
    question: "IT consultants",
    answer: "IT Staff Augmentation is a flexible hiring model that allows you to add skilled tech professionals to your team on a temporary or long-term basis, helping you scale your workforce quickly based on project needs."
  },
  {
    id: 2,
    question: "SAP Remote Support",
    answer: "IT Staff Augmentation offers flexibility, cost savings, and access to a global talent pool. It enables you to fill skill gaps quickly, scale up or down based on project requirements, and avoid the lengthy hiring process."
  },
  {
    id: 3,
    question: "Managed IT Services",
    answer: "You can fill a wide range of roles, including software developers, project managers, business analysts, UX/UI designers, data engineers, and more, based on the specific requirements of your project."
  },
  {
    id: 4,
    question: "IT Contract Staffing",
    answer: "We thoroughly vet candidates through a multi-step process, including technical assessments, interviews, and background checks, to ensure they meet the skill requirements and fit your team's culture."
  },
];

const filterMessagesForSendingPayload = (messages: Message[]): Message[] => {
  const filteredMessages: Message[] = [];

  for (let i = 0; i < messages.length; i++) {
    const currentMessage = messages[i];

    if (currentMessage.sender === "bot" && currentMessage.text.startsWith("Oops")) {
      // Remove the last user message as it's invalid
      filteredMessages.pop();

      // Check upcoming user messages for valid email
      let j = i + 1;
      while (j < messages.length) {
        const nextMessage = messages[j];
        if (nextMessage.sender === "user" && isValidEmail(nextMessage.text)) {
          // Append valid email message and break loop
          filteredMessages.push(nextMessage);
          i = j; // Update i to skip validated messages
          break;
        }
        j++;
      }
    } else {
      // Append the current message if not related to "Oops"
      filteredMessages.push(currentMessage);
    }
  }

  return filteredMessages;
};

function isValidEmail(email:string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}


const defaultReply = (question: string) => `Please share what you need in ${question}. Just a quick note about your project!`

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours}:${strMinutes} ${ampm}`;
};
let sent=false

const ChatScreen: FunctionComponent<{
  onClose: () => void
}> = ({
  onClose
}) => {
    const initialTime = formatTime(new Date())
    const { darkMode } = useCallUsModalState()
    const [messages, setMessages] = useState<Message[]>([
      {
        sender: 'bot',
        text: "Hi 👋 Welcome to DataSack Solutions!",
        time: initialTime
      },
      {
        sender: 'bot',
        text: 'Please, Enter your name.',
        time: initialTime
      }],);
    const [userInput, setUserInput] = useState<string>("");
    const [step, setStep] = useState<number>(0);
    const [loading, setLoading] = useState(false)
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);
    const [isMinimized, setIsMinimized] = useState(false);



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


    useEffect(()=>{
      if (step==6 && !sent){
        const got = filterMessagesForSendingPayload(messages)
        sendChatsToEmail(got)
        sent=true
      }
    },[step,messages])

    const handleMinimize = () => {
      setIsMinimized((prev) => !prev);
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


      if (step !== 0 && step !== 1 && step !== 2 && step != 3) {
        setMessages([...messages, { sender: "user", time, text: defaultQuestions1.find(e => e.id == parseInt(message) || e.question.toLowerCase().includes(message.toLowerCase()))?.question || message }]); //otherwise, default questions, or custom service name
        setStep(5)
      } else {
        setMessages([...messages, { sender: 'user', time, text: message }])  //this is for name, email, phone, country
      }

      setUserInput("");

      const happyResponse = getHappyResponse(message)

      if (step === 0) {
        addBotMessage(`Hi ${message}, Please enter your email.`, 1);

      } else if (step === 1) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(message.trim())
        if (!isValid) {
          setStep(1)
          addBotMessage('Oops, Please give a valid email!', 1)
          return
        }

        addBotMessage("Enter your mobile number", 2)

      } else if (step === 2) {
        addBotMessage("Which country are you from? ", 3);
      }
      else if (step === 3) {
        addBotMessage("Please Select one of the following services. ", 4);
      } else if (step === 4) {
        addBotMessage(defaultReply(defaultQuestions1.find(r => r.id == parseInt(message))?.question || message), 5)
      } else if (step === 5) {
        addBotMessage('Thank you, Your response has been recorded. Our team will contact you soon.✨', 6)
      }
      else {
        if (happyResponse) {
          addBotMessage(happyResponse, 6)
        } else {
          addBotMessage('Please Selected one of the following services. ', 4)
        }
      }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | string) => {
      if (typeof e == 'string') {
        setUserInput(e);
      } else {
        e.preventDefault()
        setUserInput(e.target.value);
      }
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



        <div className={`bg-white dark:bg-gray-900 rounded-t-3xl items-center justify-between hide-scrollbar touch-pan-x drag-handle 
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
          <div className="m-auto block w-fit h-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightgray" className="size-6">
              <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>

          </div>

          <div className="py-3 px-4 rounded-t-3xl flex items-center justify-between ">
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
              <button onClick={()=>{
                sent=false
                onClose()
              }} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                &#10005;
              </button>
            </div>

          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto hide-scrollbar space-y-4">
          <div className="text-xs w-full m-auto text-center dark:text-white">Please share your Name, Email, Phone, and Country to help us assist you better. Thank you!</div>
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
                    <p className="float-right mt-1 text-xs text-black dark:text-white">{msg.time}</p>
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
                  <p className="float-start mt-1 text-xs text-black dark:text-white">{msg.time}</p>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {step === 4 && (
          <div className="h-auto px-7 overflow-auto flex flex-col mb-2">

            {defaultQuestions1.map((question) => (
              <div key={question.id} className="h-full w-full p-1 justify-center text-center ">
                <button
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-2 px-4 w-3/4 rounded-full text-xs 
                  hover:bg-orange-400
                  hover:text-white
                  "
                  onClick={() => {
                    if (!loading) handleUserSubmit(String(question.id));
                  }}
                >
                  {question.question}
                </button>
              </div>
            ))}

            <div className="text-xs text-center mt-2 text-gray-500">
              If not listed, please specify your required service.
            </div>
          </div>
        )}


        <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center bg-white dark:bg-gray-900">
          {step != 2 && <input
            type="text"
            placeholder={(step == 0 && "Enter your name") || (step == 1 && 'Enter your email') || (step == 2 && 'Enter your phone') || (step == 3 && 'Enter your country') || (step == 4 && 'or Enter your custom service') || 'Enter your message'}
            className="w-full bg-transparent focus:outline-none text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={(e) => !loading && handleKeyPress(e)}
            autoFocus={!isMinimized}
            disabled={isMinimized}
          />}

          {step == 2 && <div>
            <PhoneInput
              onEnterKeyPress={(e) => !loading && handleKeyPress(e)}
              country="sa"
              value={userInput}
              onChange={(phone) => {
                handleInputChange(phone)
              }}
              containerStyle={{ backgroundColor: 'transparent' }}
              inputStyle={{ width: '100%', border: 'none', backgroundColor: 'transparent', color: darkMode ? 'white' : 'black', }}
              dropdownStyle={{ backgroundColor: 'white', color: 'gray', position: 'absolute', bottom: 30 }}
              buttonStyle={{ backgroundColor: 'transparent', border: 'none' }}
              inputProps={{
                autoFocus: true,
              }}
            />
          </div>}
          <button
            disabled={loading}
            onClick={() => {
              if (!loading && userInput) {
                handleUserSubmit(userInput)
              }
            }}
            className=" p-2 bg-orange-500 ml-auto rounded-full text-white hover:bg-orange-600"
          >
            &#10148;
          </button>
        </div>
      </div>
    );
  };

export default ChatScreen;

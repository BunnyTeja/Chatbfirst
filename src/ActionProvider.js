// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleDVList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Data Visualisation:",
      {
        widget: "DataVisualisationLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleAPIList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on API:",
      {
        widget: "APILinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleSecurityList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Security:",
      {
        widget: "SecurityLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleInterviewPrepList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Interview Preparation:",
      {
        widget: "InterviewPrepLinks",
      }
    );

    this.updateChatbotState(message);
  };
  //greet() {
    //const greetingMessage = this.createChatBotMessage("Hi, friend.")
    //this.updateChatbotState(greetingMessage)
  //}
  updateChatbotState(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


       this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
        }))
      }
}

export default ActionProvider;

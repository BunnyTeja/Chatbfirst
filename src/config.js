// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";
const config = {
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],

 widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
     {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
     widgetName: "DataVisualisationLinks",
     widgetFunc: (props) => <LinkList {...props} />,
     props: {
       options: [
         {
           text: "Introduction to Data Visualisation",
           url:
             "https://www.freecodecamp.org/learn/data-visualization/",
           id: 1,
         },
         {
           text: "codecademy Data Visualisation",
           url:
             "https://www.codecademy.com/catalog/subject/data-visualization",
           id: 2,
         },
         {
           text: "More Articles and Resources",
           url: "https://www.tableau.com/learn/articles/data-visualization",
           id: 3,
         },
       ],
     },
   },
   {
    widgetName: "APILinks",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "Introduction to API",
          url:
            "https://www.freecodecamp.org/news/apis-for-beginners-full-course/",
          id: 1,
        },
        {
          text: "Restful API Design",
          url:
            "https://restful-api-design.readthedocs.io/en/latest/resources.html#:~:text=The%20fundamental%20concept%20in%20any,methods%20that%20operate%20on%20it.&text=Collections%20can%20exist%20globally%2C%20at,contained%20inside%20a%20single%20resource.",
          id: 2,
        },
        {
          text: "Kuberneters API",
          url: "https://kubernetes.io/docs/concepts/overview/kubernetes-api/",
          id: 3,
        },
      ],
    },
  },
  {
   widgetName: "SecurityLinks",
   widgetFunc: (props) => <LinkList {...props} />,
   props: {
     options: [
       {
         text: "Introduction to Information Security",
         url:
           "https://www.freecodecamp.org/learn/information-security/",
         id: 1,
       },
       {
         text: "Mozilla JS Guide",
         url:
           "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
         id: 2,
       },
       {
         text: "Frontend Masters",
         url: "https://frontendmasters.com",
         id: 3,
       },
     ],
   },
 },
 {
  widgetName: "InterviewPrepLinks",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Introduction to JS",
        url:
          "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        id: 1,
      },
      {
        text: "Mozilla JS Guide",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        id: 2,
      },
      {
        text: "Frontend Masters",
        url: "https://frontendmasters.com",
        id: 3,
      },
    ],
  },
},
 ],
 customStyles: {
  botMessageBox: {
    backgroundColor: "#376B7E",
  },
  chatButton: {
    backgroundColor: "#376B7E",
  },
},
}

export default config

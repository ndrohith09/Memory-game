import andaman from "../assets/andaman.png";
import andhra from "../assets/andhra.png";
import Arunachal from "../assets/Arunachal.png";
import assam from "../assets/assam.png";
import Bihar from "../assets/Bihar.png";
import Chandigarh from "../assets/Chandigarh.png";
import Chhattisgarh from "../assets/Chhattisgarh.png";
import Dadra from "../assets/Dadra.png";
import delhi from "../assets/delhi.png";
import Goa from "../assets/Goa.png";
import Gujarat from "../assets/Gujarat.png";
import Haryana from "../assets/Haryana.png";
import Himachal from "../assets/Himachal.png";
import Jharkhand from "../assets/Jharkhand.png";
import jk from "../assets/jk.png";
import Karnataka from "../assets/Karnataka.png";
import Kerela from "../assets/Kerela.png";
import Ladakh from "../assets/Ladakh.png";
import Lakshadweep from "../assets/Lakshadweep.png";
import madhya from "../assets/madhya.png";
import maharastra from "../assets/maharastra.png";
import manipur from "../assets/manipur.png";
import meghalaya from "../assets/meghalaya.png";
import mizoram from "../assets/mizoram.png";
import nagaland from "../assets/nagaland.png";
import odisha from "../assets/odisha.png";
import Puducherry from "../assets/Puducherry.png";
import punjab from "../assets/punjab.png";
import rajasthan from "../assets/rajasthan.png";
import sikkim from "../assets/sikkim.png";


const qBank = [
  {
    id: 1,
    description: {
      image: andaman,
    },
    questions: [
      {
        question: "What is the capital of Andaman and Nicobar island? ",
        answers: ["Daman", "Port Blair","Agartala", "Srinagar"],
        correct: "Port Blair",
        questionId: "1001",
      },
      {
        question: "What is the official language of Andaman and Nicobar island? ",
        answers: ["Telugu", "Malayalam","Hindi","Kashmiri"],
        correct: "Hindi",
        questionId: "1002",
      },
      {
        question: "Does the Island has only Active Volcano of India?",
        answers: ["True", "False"],
        correct: "True",
        questionId: "1003",
      },
      {
        question: "Which of the following from below is one of the Tourist attraction of the island? ",
        answers: ["Jetty Garden", "Gulmarg","Agatti Island","Indira Point"],
        correct: "Indira Point",
        questionId: "1004",
      },
    ],
  },
  {
    id: 2,
    description: {
      image: andhra,
    },
    questions: [
      {
        question: "Which of the following is NOT a neighboring state of Andhra Pradesh?",
        answers: ["Telangana", "Arunachal Pradesh", "Odisha", "Tamil Nadu" ],
        correct: "Arunachal Pradesh",
        questionId: "2001",
      },
      {
        question: "What is the official language of Andhra Pradesh?  ",
        answers: ["Telugu", "Tamil", "Malayalam", "Tani"],
        correct: "Telugu",
        questionId: "2002",
      },
      {
        question: "What is the capital of Andhra Pradesh? ",
        answers: ["Dispur", "Patna","Amaravati", "Kavaratti",],
        correct: "Amaravati",
        questionId: "2003",
      },
      {
        question: "Which of the following is one of the tourist attractions in Andhra Pradesh?  ",
        answers: ["Itanagar", "Vishakapatnam","Kalpeni", "Ziro Valley",],
        correct: "Vishakapatnam",
        questionId: "2004",
      },
    ],
  },
  {
    id: 3,
    description: {
      image: Arunachal,
    },
    questions: [
      {
        question: "Which is the neighboring state of Arunachal Pradesh? ",
        answers: ["Assam", "Karnataka", "Andhra Pradesh", "Ladakh"],
        correct: "Assam",
        questionId: "3001",
      },
      {
        question: "Which of the following is one of the tourist attractions in Andhra Pradesh?",
        answers: ["Kamakhya Temple", "Bodhgaya", "Tawang", "Paradise Beach"],
        correct: "Tawang",
        questionId: "3002",
      },
      {
        question: "What is the capital of Arunachal Pradesh? ",
        answers: ["Raipur", "Itanagar", "Panaji"," Gandhinagar"],
        correct: "Itanagar",
        questionId: "3003",
      },
      {
        question: "What is the official language of Arunachal Pradesh? ",
        answers: ["Telugu", "Malayalam", "Hindi","Tani"],
        correct: "Tani",
        questionId: "3004",
      },
    ],
  },
  {
    id: 4,
    description: {
      image: assam,
    },
    questions: [
      {
        question: "What Is The Official Language Of Assam?  ",
        answers: ["Assamese", "Hindi"," Konkani","Gujarati"],
        correct: "Assamese",
        questionId: "4001",
      },
      {
        question: "Which Is The a Tourist Attractions In Assam?  ",
        answers: ["Barnawapara Wildlife Sanctuary", "Kalangute Beach","Kaziranga National Park", "Golkonda Fort"],
        correct: "Kaziranga National Park",
        questionId: "4002",
      },
      {
        question: "What Is The Capital Of Assam?   ",
        answers: ["New Delhi","Dispur","Chandigarh", "Kohima"],
        correct: "Dispur",
        questionId: "4003",
      },
      {
        question: "Which Is NOT The Neighboring State Of Assam?  ",
        answers: ["Arunachal Pradesh","Westbengal", "Meghalaya", "Jharkhand"],
        correct: "Jharkhand",
        questionId: "4004",
      },
    ],
  },
  {
    id: 5,
    description: {
      image: Bihar,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "5001",
      },
      {
        question: "Is Bihar the largest producer of saffron?        ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "5002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "5003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "5004",
      },
    ],
  },
  {
    id: 6,
    description: {
      image: Chandigarh,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "6001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "6002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "6003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "6004",
      },
    ],
  },
  {
    id: 7,
    description: {
      image: Chhattisgarh,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "7001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "7002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "7003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "7004",
      },
    ],
  },
  {
    id: 8,
    description: {
      image: Dadra,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "8001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "8002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "8003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "8004",
      },
    ],
  },
  {
    id: 9,
    description: {
      image: delhi,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "9001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "9002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "9003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "9004",
      },
    ],
  },
  {
    id: 10,
    description: {
      image: Goa,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "10001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "10002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "10003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "10004",
      },
    ],
  },
  {
    id: 11,
    description: {
      image: Gujarat,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "11001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "11002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "11003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "11004",
      },
    ],
  },
  {
    id: 12,
    description: {
      image: Haryana,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "12001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "12002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "12003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "12004",
      },
    ],
  },
  {
    id: 13,
    description: {
      image: Himachal,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "13001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "13002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "13003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "13004",
      },
    ],
  },
  {
    id: 14,
    description: {
      image: Jharkhand,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "14001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "14002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "14003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "14004",
      },
    ],
  },
  {
    id: 15,
    description: {
      image: jk,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "15001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "15002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "15003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "15004",
      },
    ],
  },
  {
    id: 16,
    description: {
      image: Karnataka,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "16001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "16002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "16003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "16004",
      },
    ],
  },
  {
    id: 17,
    description: {
      image: Kerela,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "17001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "17002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "17003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "17004",
      },
    ],
  },
  {
    id: 18,
    description: {
      image: Ladakh,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "18001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "18002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "18003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "18004",
      },
    ],
  },
  {
    id: 19,
    description: {
      image: Lakshadweep,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "19001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "19002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "19003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "19004",
      },
    ],
  },
  {
    id: 20,
    description: {
      image: madhya,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "20001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "20002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "20003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "20004",
      },
    ],
  },
  {
    id: 21,
    description: {
      image: maharastra,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "21001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "21002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "21003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "21004",
      },
    ],
  },
  {
    id: 22,
    description: {
      image: manipur,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "22001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "22002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "22003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "22004",
      },
    ],
  },
  {
    id: 23,
    description: {
      image: meghalaya,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "23001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "23002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "23003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "23004",
      },
    ],
  },
  {
    id: 24,
    description: {
      image: mizoram,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "24001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "24002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "24003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "24004",
      },
    ],
  },
  {
    id: 25,
    description: {
      image: nagaland,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "25001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "25002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "25003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "25004",
      },
    ],
  },
  {
    id: 26,
    description: {
      image: odisha,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "26001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "26002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "26003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "26004",
      },
    ],
  },
  {
    id: 27,
    description: {
      image: Puducherry,
    },
    questions: [
        {
          question: "What Is The Capital Of Rajasthan? ",
          answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
          correct: "Jaipur",
          questionId: "27001",
        },
        {
          question: "Which Is The a Tourist Attractions In Rajasthan?  ",
          answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
          correct: "Hawa Mahal",
          questionId: "27002",
        },
        {
          question: "What Is The Capital Of Punjab?  ",
          answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
          correct: "Chandigarh",
          questionId: "27003",
        },
        {
          question: "Is Rajasthan the largest State of India? ",
          answers: ["True", "False"],
          correct: "True",
          questionId: "27004",
        },
    ],
  },
  {
    id: 28,
    description: {
      image: punjab,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "28001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "28002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "28003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "28004",
      },
    ],
  },
  {
    id: 29,
    description: {
      image: rajasthan,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "29001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "29002",
      },
      {
        question: "Which Is The NOT a Neighboring State Of Rajasthan?  ",
        answers: ["Delhi","Haryana","Uttar Pradesh", "Madhya Pradesh"],
        correct: "Delhi",
        questionId: "29003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "29004",
      },
    ],
  },
  {
    id: 30,
    description: {
      image: sikkim,
    },
    questions: [
      {
        question: "What Is The Official Language Of Sikkim? ",
        answers: ["Bengali", "Punjabi","Nepali","Hindi"],
        correct: "Nepali",
        questionId: "30001",
      },
      {
        question: "What Is The Capital Of Sikkim?  ",
        answers: ["Chennai", "Punjab","Jaipur", "Gangtok"],
        correct: "Gangtok",
        questionId: "30002",
      },
      {
        question: "Which Is The Neighboring State Of Sikkim?  ",
        answers: ["West Bengal", "Karnataka", "Andhra Pradesh", "Ladakh"],
        correct: "West Bengal",
        questionId: "30003",
      },
      {
        question: "Which of The following is Tourist Attractions In Sikkim ?  ",
        answers: ["Yuksom", "Jantar Mantar","Rameshwaram", "Golden Temple",],
        correct: "Yuksom",
        questionId: "30004",
      },
    ],
  },

];

  
const quizService = (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
export default quizService;

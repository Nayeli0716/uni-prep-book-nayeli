let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")



let students = [
   {
    profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1305.JPG?v=1585181581250",
    name: "Eric Castro",
    quote: "High school was just like a poem. Confusing, eyeopening, and short.",
    superlative: "Most Likely To Become A Famous Singer",
  },
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1312.JPG?v=1585181572150",   
    name: "Fatima Reyes",
    quote: "To lose patience is to lose the battle and I won ~ Gandhi",
    superlative: "Most Fashionable",
  },
  
  {
 
    profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1306.JPG?v=1585181576144",
    name: "Andrew Rivera",
    quote: "BUENOOOO",
    superlative: "Most Likely To Become A Business Man",
  },
   {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1313.JPG?v=1585181589645",
    name: "Mayhelly Vargas",
    quote: "Be the change you want to see in the world ~ Gandhi",
    superlative: "Most Likely To Not Grow",
  }, 
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1314.JPG?v=1585181593182",
    name: "Vianka ",
    quote: "Don't ever let people get into your head ad make sure you try your best and be the best you can be. ",
    superlative: "Most Unforgettable",
  }, 
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1311.JPG?v=1585181586629",
    name: "Emmanuel Taveras",
    quote: "Life goes on",
    superlative: "Best Smile",
  }, 
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1319.JPG?v=1585183644790",
    name: "Babamayokun Okedero",
    quote: "Hard work beats talent when talent fails.",
    superlative: "Most Likely To Become A Proffessional Basketball Player",
  }, 
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1317.jpg?v=1585183648743",
    name: "Miguel Lucero",
    quote: "Why you the way you are?",
    superlative: "Best Hair",
  },
   {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1320.JPG?v=1585189951075",
    name: "Lesslie Pacheco",
    quote: "We came from nothing and go for everything",
    superlative: "Best Personality",
  },
  {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1471.JPG?v=1585790101533",
    name: "Nayleah Delgado",
    quote: "Why fit in when you were born to stand out",
    superlative: "Most Caring",
  },
   {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1472.JPG?v=1585790109327",
    name: "Nixon Mercado",
    quote: "I like donuts",
    superlative: "Most Organized",
  },
   {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1473.JPG?v=1585790125522",
    name: "Brian Alago",
    quote: "Im reflecting only in the sense that I learn to move forward. I reflect with a purpose ~Kobe Bryant",
    superlative: "Class Clown",
  },
   {
      profileImage: "https://cdn.glitch.com/9916f0aa-36ae-4022-ba2d-2fa6363a33cd%2FIMG_1473.JPG?v=1585790125522",
    name: "Nysheara Johnson",
    quote: "Change is inevitable. Why hold onto what you have to let go of?",
     superlative: "Least Likely To Grow",
  },
  {
      profileImage: "https://static.billboard.com/files/2020/03/ariana-grande-grammys-2020-billboard-1548-1584296482-1024x677.jpg",
    name: "Ariana Grande",
    quote: "When you feel your best. Everbody else can feel it too",
     superlative: "Most Emotional",
  },
  {
      profileImage: "https://qph.fs.quoracdn.net/main-qimg-676bad9adaa4e7399e5c66220a49d635",
    name: "Billie Eilish",
    quote: "I want to be alone, alone with you if that makes sense",
     superlative: "Most Successful",
  },
  
]

let count = 0

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative

})


backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
   document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative 
})

             
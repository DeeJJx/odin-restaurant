const heading = document.createElement("h1");
heading.textContent = "Contact Page";

const paraOne = document.createElement("p");
paraOne.textContent = "have you ever heard of the great Parmo Central? We at Parmo Central take pride in our baility to produce the worlds best parmos. We love parmos in all different shapes and sizes, having been a Parmo connoessiur for many years I finally decided to open up my own parmo shop for everyone to indulge.";

const subHeader = document.createElement("h2");
subHeader.textContent = "What is a Parmo?";

const paraTwo = document.createElement("p");
paraTwo.textContent = "If you didn't know what a parmo is, well you've missed out! But fear no more! For a parmo is a delicious teeside creation, take a chicken breast and flatten it out with a hammer. After which, coat your flat breast in some delicious breadcrumbs and deep fry. Here is your standard Parmo base. From here the classic parmo takes a layer of bechamel source smothered on one side of the chicken and topped with cheese before placed under the grill. Voila you have yourself a parmo!";

const contactContent = document.createElement("div");
contactContent.setAttribute("id", "contact");
contactContent.append(heading,subHeader, paraOne, paraTwo,);

function contactComponent() {
    const content = document.querySelector("#content");
    content.append(contactContent);
}


export { contactComponent };
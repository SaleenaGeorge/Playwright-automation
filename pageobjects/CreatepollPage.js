class CreatepollPage{
    constructor(page){
        this.page=page;
        this.gradedPollButton=page.locator(".dropdown-poll-type-first");
       
        this.addQuestion=page.locator("#add-button-text").first();
        this.pollTitle=page.locator(".poll-header-text");
        this.chooseMultiplechoice=page.locator("//input[@id='Multiple Choice']");
        this.chooseShortAns=page.locator("//input[@id='Short Answer']");
        this.chooseTrueOrFalse=page.locator("//input[@id='True or False']");
        this.chooseFITB=page.locator("//input[@id='Fill in the Blank']");
        this.chooseClickableImage=page.locator("//input[@id='Clickable Image']");

        this.multiplechoiceQuestion=page.locator(".poll-sub-text").nth(1);
        this.multiplechoiceOption1=page.locator(".poll-sub-text").nth(2);
        this.multiplechoiceOption2=page.locator(".poll-sub-text").nth(3);
        this.multiplechoiceOption3=page.locator(".poll-sub-text").nth(2);
        this.multiplechoiceOption4=page.locator(".poll-sub-text").nth(3);
        this.multiplechoiceRadioButton=page.locator(".radio-outer-circle").nth(1);
        this.shortanswerQuestion=page.locator(".poll-sub-text");
        this.trueorfalseQuestion=page.locator(".poll-sub-text").nth(1);
        this.trueRadioButton=page.locator(".radio-outer-circle").nth(1);
        this.fillintheblankQuestion=page.locator(".public-DraftStyleDefault-block");
        this.addBlankButton=page.locator("//button[contains(text(),'Add Blank')]");
        this.blankAnswer=page.locator("input.fitb-bold ");
        this.clickableImageQuestion=page.locator(".poll-sub-text").nth(1);
        this.clickableImageOption1=page.locator(".poll-sub-text").nth(2);
        this.clickableImageOption2=page.locator(".poll-sub-text").nth(3);
        this.clickableImageRadioButton=page.locator(".radio-outer-circle").nth(1);
        this.save=page.locator("button[title='Save Draft Poll']");
        this.saveandClose=page.locator("button[title='Save & Close Poll']");
    }

    async createMultipleChoiceQuestion(multiple_choice_question,multiple_choice_question_option1,multiple_choice_question_option2,multiple_choice_question_option3,multiple_choice_question_option4){
        await  this.chooseMultiplechoice.click();
        await  this.multiplechoiceQuestion.type(multiple_choice_question);
        await  this.multiplechoiceOption1.type(multiple_choice_question_option1);
        await  this.multiplechoiceOption2.type(multiple_choice_question_option2);
        await  this.multiplechoiceOption2.type(multiple_choice_question_option3);
        await  this.multiplechoiceOption2.type(multiple_choice_question_option4);
     }

     async createShortAnsQuestion(short_answer_question){
        await  this.chooseShortAns.click();
        await  this.shortanswerQuestion.type(short_answer_question);
       
     }

     async createTrueOrFalseQuestion(trueorfalse_question){
        await  this.chooseTrueOrFalse.click();
        await  this.trueorfalseQuestion.type(trueorfalse_question);
        await  this.trueRadioButton.click();
       
     }

     async createFITBQuestion(fillintheblank_question,blankans){
        await  this.chooseFITB.click();
        await  this.fillintheblankQuestion.type(fillintheblank_question)
        await  this.addBlankButton.click();
        await  this.blankAnswer.type(blankans)
        
     }

     async createClickableImageQuestion(clickableimagequestion,clickableimageoption1,clickableimageoption2){
        await  this.chooseClickableImage.click();
        await  this.clickableImageQuestion.type(clickableimagequestion)
        await  this.clickableImageOption1.type(clickableimageoption1)
        await  this.clickableImageOption2.type(clickableimageoption2)
       
     }
   
    }
module.exports = {CreatepollPage};
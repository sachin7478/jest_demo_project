import { screen, render, configure, within } from "@testing-library/react";
import App from "../App";
import Profile from "../Profile";
// configure({testIdAttribute: 'id'}) // overriding attribute here

describe.skip('Describing profile', () => {
  test("My third Jest test case", ()=> {
    render(<App/>);
    const text = screen.getByText("Learn React",{exact:true});
    const text2 = screen.getByText(/learn react/i); // non case sensitive
    const text3 = screen.getByText(/arn Rea/); // Regex
    const text4 = screen.getByText(/arn R?ea/); // Regex - ignores R
    const elem = screen.getByText((innerContent, element) =>  innerContent.startsWith("Learn"));
    const elem2 = screen.getByText((innerContent, element) =>  innerContent.endsWith("React"));
    const elem3 = screen.getByText((innerContent, element) =>  innerContent.includes("React"));
    const input = screen.getByPlaceholderText("Enter Name");
    
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();
    expect(elem).toBeInTheDocument();
    expect(elem2).toBeInTheDocument();
    expect(elem3).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Profile App testing", () => {
    render(<Profile />);
    const sameLabelText = screen.getAllByLabelText("ProfileData");
    const sameLabelCheckboxes = screen.getAllByLabelText("Skills");
    const samePlaceholderTextboxes = screen.getAllByPlaceholderText("some text");
    const sameTextButtons = screen.getAllByText("some button");
    const sameTextInput = screen.getAllByDisplayValue("sachin");
    const sameTestIdElements = screen.getAllByTestId("some_test_id");
    const sameTitleElements = screen.getAllByTitle("click me");
    const sameAltTextImages = screen.getAllByAltText("some image")
    const loginBtn = screen.queryByText("Login"); //query: consider the code which is not on the screen but hidden;
    const cssSelector = document.querySelector("#addr"); // query selector

    const container = screen.getByTestId("form_element");
    const container2 = screen.getByText(/sachin world/i);
    const innerElem1 = within(container).getByText("Good Morning");
    const innerElem2 = within(container2).getByText("Good Afternoon");
    expect(innerElem1).toBeInTheDocument();
    expect(innerElem2).toBeInTheDocument();
    // Override testId's
    // const section = screen.getByTestId("some_section_id") // at html it is 'id' attribute

    
    expect(loginBtn).not.toBeInTheDocument();
    expect(cssSelector).toHaveAttribute("type","textbox");
    for(let i=0;i<sameLabelText.length;i++) {
      expect(sameLabelText[i]).toBeInTheDocument();
      expect(sameLabelText[i]).toHaveValue("sachin");
    }
    for(let i=0;i<sameLabelCheckboxes.length;i++) {
      expect(sameLabelCheckboxes[i]).toBeInTheDocument();
      expect(sameLabelCheckboxes[i]).toBeChecked();
    }
    for(let i=0;i<samePlaceholderTextboxes.length;i++) {
      expect(samePlaceholderTextboxes[i]).toBeInTheDocument();
      expect(samePlaceholderTextboxes[i]).toHaveValue();
      expect(samePlaceholderTextboxes[i]).toBeDisabled();
    }
    for(let i=0;i<sameTextButtons.length;i++) {
      expect(sameTextButtons[i]).toBeInTheDocument();
      expect(sameTextButtons[i]).toHaveClass("active");
      expect(sameTextButtons[i]).not.toBeDisabled();
    }
    for(let i=0;i<sameTestIdElements.length;i++) {
      expect(sameTestIdElements[i]).toBeInTheDocument();
    }
    for(let i=0;i<sameTitleElements.length;i++) {
      expect(sameTitleElements[i]).toBeInTheDocument();
      
    }
    for(let i=0;i<sameTextInput.length;i++) {
      expect(sameTextInput[i]).toBeInTheDocument();
    }
    for(let i=0;i<sameAltTextImages.length;i++) {
      expect(sameAltTextImages[i]).toBeInTheDocument();
      expect(sameAltTextImages[i]).not.toHaveClass("active");
    }
    // expect(section).toBeInTheDocument();  /overridden attribute

  });
})


import { screen, render, fireEvent, act, waitFor, prettyDOM, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import { SubApp } from "../App";
import CleanDb from "../CleanDb";
import AsyncApp from "../AsyncApp";
import Heading from "../Heading";


//beforeAll Hook - for 10 test cases, it will be called only once
//BeforeEach Hook- for 10 test cases, it will be called 10 times
//afterAll Hook- After all test cases run completed, it will be called only once
//AfterEach Hook- After each test case run completed, it will get called everytime

 // will run before beforeEach hook
beforeAll(()=>{
  console.log('++Yes++');
});
// will run after beforeAll hook
beforeEach(()=>{ 
  console.log("---before each--");
  CleanDb(); // this function will  run before executing each test case 
})
describe('Describing sections', () => {
  test.skip("My First Jest test case", ()=> {
    render(<App/>);
    const text = screen.getByText("Learn React",{exact:false});
    const text2 = screen.getByText(/learn react/i); // not case sensitive
    const input = screen.getByPlaceholderText("Enter Name")
    const inputElement = screen.getByPlaceholderText("Enter Name")
    const element = screen.getByRole("textbox"); // textbox
    const element2 = screen.getByRole("textbox", {name:"USER NAME"}); // textbox binded with label
    const element3 = screen.getByLabelText("USER NAME"); // textbox binded with label
    const dv = screen.getByRole("dummy") // with custom role
    const tstDiv = screen.getByTestId("dummy_test_id"); // getByTestId
    const allArticles = screen.getAllByRole("article");
    const allOptions = screen.getAllByRole("option");
    
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(tstDiv).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
    expect(element3).toHaveValue("Sachin"); // from label identity
    expect(dv).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(element).toHaveAttribute("name","user_name");
    expect(element).toHaveAttribute("id","user_name");
    for(let i=0; i < allArticles.length; i++) {
      expect(allArticles[i]).toBeInTheDocument();
    }
    for(let j=0; j<allOptions.length; j++) {
      expect(allOptions[j]).toBeInTheDocument();
    }
  });

  test.skip("Event testing",()=>{
    render(<SubApp />)
    const element = screen.getByRole("textbox");
    const btn = screen.getByRole("button", {name:"set heading"});
    const testVal = "Sachin";
    fireEvent.change(element,{target: {value:testVal}});
    expect(element.value).toBe(testVal)
    fireEvent.click(btn);
    expect(screen.getByText(testVal)).toBeInTheDocument();
  })

  test.skip("events testing by event library - Click", async () =>{
    render(<SubApp />)
    const btn = screen.getByRole("button",{name:"set heading"});
    await userEvent.click(btn); // click event
    await expect(screen.getByRole("heading", {name:/sachin/i})).toBeInTheDocument();
  })
  test.skip("events testing by event library - type, keypress", async () =>{
    
    userEvent.setup();
    render(<SubApp />)
    const testVal = " good moring";
    await act(async ()=>{
      const btn = screen.getByRole("button",{name:"set heading"});
      await userEvent.click(btn); // click event
      const textbox = screen.getByRole("textbox", {name:/user name/i});
      await userEvent.type(textbox, testVal);
    })
    const head = screen.getByRole("heading"); 
    expect(head).toHaveTextContent(testVal);
  })
  test.skip("Testing asynch things", async () => {
    render(<AsyncApp/>);
    const elem = await screen.findByText("Data found",{},{timeout:15000});
    await expect(elem).toBeInTheDocument();
  });

  test("Props testing", async ()=>{
    const name = "SACHIN"
    const doSomething = jest.fn();
    const {container, debug} = render(<Heading name={name} handleFunction={doSomething}/>)
    const head = screen.getByRole("heading");
    expect(head).toHaveTextContent(name);
    console.log(prettyDOM(head)) // prettyDom to debug
    debug(); // to debug
    logRoles(container); // to debug
    await expect(doSomething).toBeCalled()
  });
})


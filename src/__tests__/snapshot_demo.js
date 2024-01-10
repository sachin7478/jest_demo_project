import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

// It will check for previous verion of code with new version of code of <Heading /> component
// It will create one copy in __snapshot__ folder and compare each next time when test got executed
// If any change, to accep press "u" OR // Delete snapsot copy and execute test again

test.skip("Snapshot for App component", ()=>{
  // const container = render(<Heading />)
  // expect(container).toMatchSnapshot();
});
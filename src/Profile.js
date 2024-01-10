const Profile = () => {
  const boolLogin = true;
  return(<>
    <div data-testid="form_element">
      Sachin World
      <span>Good Morning</span>
      <span>Good Afternoon</span>

      <label htmlFor='age'>ProfileData</label>
      <input type="textbox" id="age" defaultValue={"sachin"}/>

      <label htmlFor='mobile'>ProfileData</label>
      <input type="textbox" id="mobile" defaultValue={"sachin"}/>
      
      <label htmlFor='addr'>ProfileData</label>
      <input type="textbox" id="addr" defaultValue={"sachin"}/>

      <label htmlFor='skill1'>Skills</label>
      <input type="checkbox" id="skill1" defaultChecked={true}/>
      
      <label htmlFor='skill2'>Skills</label>
      <input type="checkbox" id="skill2" defaultChecked={true}/>
    </div>
    <input type="text" placeholder="some text" disabled defaultValue={"sachin"}/>
    <input type="text" placeholder="some text" disabled defaultValue={"sachin"}/>

    <button title="click me" data-testid="some_test_id" className="active">some button</button>
    <button title="click me" data-testid="some_test_id" className="active">some button</button>
    <button title="click me" data-testid="some_test_id" className="active">some button</button>
    <section id="some_section_id"></section> {/** overriding dataTestId with 'id' */}

    <img alt="some image"/>
    <img alt="some image"/>
    <img alt="some image"/>

    { boolLogin ? <button>Logout</button> : <button>Login</button> }

  </>)
}
export default Profile
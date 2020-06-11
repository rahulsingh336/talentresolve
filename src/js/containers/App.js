import React, { useState } from "react";
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/LandingPage';
import SignUp from '../components/ui/SignUp';
import { LoginPage }  from '../containers/SignIn/SignIn';
import Contact from "../components/ContactUs";
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  theme from '../components/ui/Theme';


function App() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/signin" component={LoginPage}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact
                           path="/contactus"
                           render={props => (
                               <Contact
                                   {...props}
                                   setValue={setValue}
                                   setSelectedIndex={setSelectedIndex}
                               />
                           )}/>
                    <Route exact path="/estimate" component={()=> <div style={{height: "2000px"}}>estimate</div>}/>
                </Switch>
                <Footer value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

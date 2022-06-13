import { ROUTES } from "../../../constants"

import { Container, InputWrapper, CheckboxWrapper, Link, Button } from "./style"


const SignInForm: React.FC = () => {
    return (
        <Container className="sign-in-content">

            <i className="fa fa-user-circle sign-in-icon"></i>

            <h1>Sign In</h1>

            <form>
                
                <InputWrapper className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </InputWrapper>

                <InputWrapper className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </InputWrapper>

                <CheckboxWrapper className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me" >Remember me</label>
                </CheckboxWrapper>

                <Link to={ROUTES.USER}>                    
                    <Button className="sign-in-button"> Sign In </Button>    
                </Link>
        
            </form>

      </Container>
    )
}

export default SignInForm
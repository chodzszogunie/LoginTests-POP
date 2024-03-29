import Login from '../pages/Login';
import { HomePage } from '../pages/HomePage';

const loginPage = new Login();
const homePage = new HomePage();

describe('Test logowania strony GoIT', () => {

    it('Logowanie użytkownika user888@gmail.com', () => {
        loginPagePage.visit();
        loginPageoginPage.signIn('user888@gmail.com', '1234567890');
        homePage.logout();
    });
});    

describe('Test logowania strony GoIT', () => {
    it('Logowanie użytkownika testowyqa@qa.team', () => {
        loginPagePage.visit();
        loginPageoginPage.signIn("testowyqa@qa.team ", "QA!automation-1");
        homePage.logout();
    });
});
   

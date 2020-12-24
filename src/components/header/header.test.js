import { render, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Favourite from '../../containers/favourite/favourite'
import Home from '../../containers/home/home'
import { store } from '../../redux/reducer'
import Header from './header'

describe('render header component successfully', () => {
    it('render header component', () => {
        const headerComponent = render(<Provider store={store}>
            <Header />
        </Provider>)
        expect(headerComponent.find('.header-container')).toHaveLength(1)
    })

    test('Clicking link will render component associated with path Home', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Router>
                    <div className="body-container">
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/fav" component={Favourite} />
                    </div>
                </Router>
            </Provider>
        );
        wrapper.find('h4').simulate('click');
        expect(wrapper.find('.grid-container')).toHaveLength(1);  // SUCCESS
    });

    test('Clicking link will render component associated with path Fav', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Router>
                    <div className="body-container">
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/fav" component={Favourite} />
                    </div>
                </Router>
            </Provider>
        );
        wrapper.find('.relative-div').simulate('click');
        expect(wrapper.find('.container')).toHaveLength(1);  // SUCCESS
    });
})
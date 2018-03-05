import React from 'react';
import CurrenciesPairs from '../../elements/CurrenciesPairs';
import AddNewCurrency from '../../elements/AddNewCurrency';
import NotificationList from '../../elements/NotificationList';
import { HelpersFoo } from '../../../config/helpers-foo';
import NotificationsType from '../../../config/notification-types';
import FontAwesome from 'react-fontawesome';
import Api from '../../../config/Api';
import MainStyles from './MainStyles';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenciesPairs: [],
            baseCurrencies: [],
            targetCurrencies: [],
            baseCoin: '',
            targetCoin: '',
            notifications: [],
            showThrobber: true,
            hasError: false
        };
    }

    // Add new currencies pair row with
    addNewCurrenciesPair = (e, baseCoin = this.state.baseCoin, targetCoin = this.state.targetCoin) => {
        if (e) {
            e.preventDefault();
        }

        if (!baseCoin || !targetCoin) {
            this.showNotification('Please, provide correct Base and Target coins', 'error');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: '',
            });
            return;
        }

        // Check if you have added same pair
        if (this.hasSamePair({base: baseCoin, target: targetCoin}, this.state.currenciesPairs)) {
            this.showNotification(`You already have ${baseCoin}/${targetCoin} pair`, 'warning');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: '',
            });
            return;
        }

        // Check if set same coin for both inputs
        if (baseCoin === targetCoin) {
            this.showNotification(`You can't set same coin for both inputs`, 'warning');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: '',
            });
            return;
        }

        // Show throbber
        this.setState({
            showThrobber: true,
        });

        Api.currencyRate(baseCoin, targetCoin)
            .then(resp => {
                this.setState(prevState => ({
                    currenciesPairs: [...prevState.currenciesPairs, resp,],
                    showThrobber: false,
                    baseCoin: '',
                    targetCoin: '',
                }));
            })
            .catch(() => {
                this.setState({
                   hasError: true
                })
            });
    };

    // Show notification
    showNotification(notificationText, type) {
        let typeStyles;

        switch(type) {
            case 'success':
                typeStyles = NotificationsType.success;
                break;
            case 'error':
                typeStyles = NotificationsType.error;
                break;
            default:
                typeStyles = NotificationsType.warning;
                break;
        }

        let notice = {
            ...typeStyles,
            // Add unique ID for every 'the same pair' notification
            id: HelpersFoo.getRandomNumber('main'),
            content: notificationText,
        };

        this.setState(prevState => {
            let oldNotifications = prevState.notifications;

            if (oldNotifications.length > 3) {
                oldNotifications.shift();
            }
            return {notifications: [...oldNotifications, {...notice},]};
        })
    }

    // Return true if state have same currency pair
    hasSamePair = (newPair, state) => {
        for (let statePair of state) {
            if (statePair.base === newPair.base && statePair.target === newPair.target) {
                return true;
            }
        }
    };

    // Remove currencies pair row with
    removeCurrenciesPair = (id) => {
        this.setState(prevState => ({
            currenciesPairs: prevState.currenciesPairs.filter(item => item.id !== id)
        }));
    };

    // Set currencies list on selects
    setCoin = (coinName, isBaseCoin) => {
        if (isBaseCoin) {
            this.setState({
                baseCoin: coinName,
            });
        } else {
            this.setState({
                targetCoin: coinName
            });
        }
    };

    // Close notifications
    dismissNotification = (e, notificationId) => {
        if (e) {
            e.preventDefault();
        }

        this.setState((prevState) => ({
            notifications: prevState.notifications.filter((item) => item.id !== notificationId)
        }));
    };

    handleClickSaveButton = (e) => {
        e.preventDefault();

        this.showNotification(`You pairs successfully saved`, 'success');
    };

    componentDidMount() {
        let baseList = Api.getBaseCurrenciesList;
        let targetList = Api.getTargetCurrenciesList;

        this.setState(prevState => ({
            baseCurrencies: [...baseList],
            targetCurrencies: [...targetList],
        }));

        setTimeout(() => this.addNewCurrenciesPair(null, baseList[0].code, targetList[0].code), 0)
    };

    render() {
        const { deviceType } = this.props;

        return (
            <main style={{
                ...MainStyles.container,
                ...MainStyles[`container${deviceType}`]
            }}>
                {/* Currencies list */}
                <CurrenciesPairs
                    hasError={this.state.hasError}
                    deviceType={deviceType}
                    currenciesPairs={this.state.currenciesPairs}
                    showThrobber={this.state.showThrobber}
                    removeCurrenciesPair={this.removeCurrenciesPair}
                />

                {/* Fields for new pairs */}
                <AddNewCurrency
                    deviceType={deviceType}
                    baseCurrencies={this.state.baseCurrencies}
                    targetCurrencies={this.state.targetCurrencies}
                    addNewCurrenciesPair={this.addNewCurrenciesPair}
                    setCoin={this.setCoin}
                />

                <div
                    style={MainStyles.buttonWrapper}
                    onClick={this.handleClickSaveButton}>
                        <button
                          style={MainStyles.saveButton}
                          onClick={this.handleClickMobileDeviceButton}>
                            <FontAwesome name='save' />
                        </button>
                </div>

                {/* Notifications */}
                <NotificationList
                    dismiss={this.dismissNotification}
                    notifications={this.state.notifications}
                />
            </main>
        )
    };
}

export default Main;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Form, Button, Alert, Icon, message, Divider, } from 'antd';

class Block extends Component {

    onCellHandler = (event) => {
        const target = event.currentTarget.id;
        this.props.uiActions.toggleCell(target)
    };

    render() {
        const { winData, cells } = this.props.ui;
        const { uiActions, id } = this.props;

        return (
            <div className="interactive-block-wrapper">
                <div className="interactive-block">
                    {
                        cells.map(cell => {

                            return (
                                <div 
                                    key={`${cell.id}${id}`}
                                    id={`${cell.id}${id}`}
                                    onClick={this.onCellHandler}
                                    className="cell">
                                    <div className={`cell-content ${cell.checked ? "checked" : ""}`}>
                                        {cell.id}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);


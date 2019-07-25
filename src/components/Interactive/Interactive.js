import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Alert, Button  } from 'antd';

class Interactive extends Component {

    onSubmit = () => {
        const { ui, uiActions } = this.props;
        const checkedCells = ui.blocks.map(block => {
            return block.cells.filter(item => item.checked === true).length + 1;

        });
        uiActions.loadWinData();
        uiActions.submitSelectedCells(checkedCells)
    };

    render() {
        const { winData, blocks, totalValid } = this.props.ui;
        const { uiActions } = this.props;

        return (
            <div className="interactive">
                {
                    blocks.map(block => {
                        const blockId = block.id;
                        return (
                            <div 
                                key={blockId} 
                                id={blockId} 
                                className={`interactive-block-wrapper ${block.isValid ? "" : "invalid"}`}>
                                <div className="interactive-block">
                                    {
                                        !block.isValid ? (
                                            <Alert 
                                                closable
                                                type="error"
                                                onClose={() => uiActions.alertClose(blockId)}
                                                message="Необходимо выбрать всего 5 позиций в карточке!" />
                                        ) : null
                                    }
                                    {
                                        block.cells.map(cell => {
                                            return (
                                                <div 
                                                    key={cell.id}
                                                    onClick={() => uiActions.toggleCell(cell)}
                                                    className="cell">
                                                    <div className={
                                                        `cell-content ${cell.checked ? "checked" : ""}`
                                                    }>
                                                        {cell.value}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <Button 
                    size="large" 
                    onClick={this.onSubmit}
                    type={!totalValid ? "dashed" : "primary"} 
                    disabled={!totalValid}>
                    Submit
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Interactive);

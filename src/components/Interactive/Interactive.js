import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Alert, Modal, Button  } from 'antd';

class Interactive extends Component {

    componentDidMount() {
        this.props.uiActions.loadCells()
    };

    onSubmit = () => {
        const { ui, uiActions } = this.props;
        const checkedCells = ui.blocks.map(block => {
            return block.cells.filter(item => item.checked === true).length + 1;
        });
        uiActions.loadWinData();
        uiActions.submitSelectedCells(checkedCells);
        setTimeout(() => uiActions.getPoints(), 1500);
        setTimeout(() => uiActions.openEndGameModal(), 2000);
    };

    render() {
        const { blocks, totalValid, loading, points, isWinModalOpen, gameOver } = this.props.ui;
        const { uiActions } = this.props;
        return (
            <div className="interactive">
                {
                    blocks.map(block => {
                        const blockId = block.id;
                        return (
                            <div 
                                key={blockId} 
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
                                                        `cell-content ${cell.checked ? "checked" : ""} ${gameOver ? (cell.win ? "won" : "wrong") : ""}`
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
                    loading={loading}
                    disabled={!totalValid}
                    className={gameOver ? "hidden" : "visible"}>
                    Отправить
                </Button>
                <Button 
                    size="large" 
                    onClick={uiActions.startNewGame}
                    type="primary"
                    className={gameOver ? "visible" : "hidden"}>
                    Новая игра
                </Button>
                <Modal
                    title={(points > 0) ? "Вы победили!" : "Вы проиграли. Попробуйте снова!"}
                    visible={isWinModalOpen}
                    onOk={uiActions.closeEndGameModal}
                    onCancel={uiActions.closeEndGameModal}
                    >
                        <h1>Всего очков: {points}</h1>
                        <h2>Хотите начать новую игру?</h2>
                    </Modal>
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

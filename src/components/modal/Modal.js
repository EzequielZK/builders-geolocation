import React, { Component } from "react";
import { getModalRef } from "./openModal";
import modalStyles from "./modal.module.css";
import ServerErrorModal from "./serverErrorModal/ServerErrorModal";
import { OutsideClick } from "..";

class Modal extends Component {
  state = {
    configs: {},
    open: false,
    type: null,
  };

  componentDidMount() {
    getModalRef(this);
  }

  setModalConfigs = (configs, type, open) => {
    if (open) {
      setTimeout(() => {
        this.setState({ open, configs, type });
      }, 50);
    }
  };

  modalTypes = () => {
    const { type } = this.state;
    const types = {
      serverError: ServerErrorModal,
    };
    return types[type];
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const Component = this.modalTypes();
    if (this.state.open) {
      return (
        <div className={modalStyles.container}>
          <OutsideClick onOutsideClick={() => this.closeModal()}>
            <div
              className={`${modalStyles.content} ${
                modalStyles[this.state.type]
              } ${modalStyles[this.state.configs?.type]}`}
            >
              <Component
                configs={this.state.configs}
                closeModal={this.closeModal}
              />
            </div>
          </OutsideClick>
        </div>
      );
    }
    return <></>;
  }
}

export default Modal;

let modalRef = null;
let savedConfigs = null;

export function getModalRef(ref) {
  if (!modalRef) {
    modalRef = ref;
  }
}

function serverErrorModal({ response }, { statusError = [] } = {}) {
  savedConfigs = {
    response,
    statusError,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "serverError", true);
}

export function closeModal() {
  modalRef.closeModal();
}

export default {
  serverErrorModal,
};

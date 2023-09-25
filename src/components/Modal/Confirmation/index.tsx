import { ModalProps } from '@/types'

 export const ModalConfirmation = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-5/6 mx-auto rounded shadow-lg z-50">
        <div className="modal-content p-4">
          <div className="modal-header mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="modal-close absolute top-2 right-2 cursor-pointer"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}


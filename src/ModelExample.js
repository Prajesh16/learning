import useToggle from './hooks/useToggle'; // Import the hook

export default function ModalExample() {
  const [isModalOpen, toggleModal] = useToggle();

  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <button
        onClick={toggleModal}
        className="p-3 bg-blue-500 text-white rounded-lg"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">This is a modal!</p>
            <button
              onClick={toggleModal}
              className="mt-4 p-2 bg-red-500 text-white rounded-lg"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

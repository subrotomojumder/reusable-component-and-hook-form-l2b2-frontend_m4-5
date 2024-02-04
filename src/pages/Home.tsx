import { FormEvent, useState } from "react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (true) {
      handleModalClose();
    }
  };
  return (
    <Container>
      <div className="relative h-screen w-full flex justify-center items-center gap-2">
        <Button
          onClick={() => setModal((prev) => !prev)}
          className="w-[200px] z-10"
          variant="btn-solid"
        >
          Open Modal
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>Modal title</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input className="border my-1" type="text" />
            <input className="border my-1" type="text" />
            <br />
            <button className="border my-1" type="submit">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </Container>
  );
};

export default Home;

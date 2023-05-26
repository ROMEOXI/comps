import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium porta velit non pharetra. Proin egestas, metus et sagittis
        venenatis, nunc mauris ornare lacus, at sollicitudin libero diam sed
        nibh. Suspendisse ornare laoreet odio et elementum. Mauris id velit
        viverra, sollicitudin diam sed, efficitur sem. Fusce sed odio lectus.
        Nulla dictum cursus nisi nec semper. Aenean congue, lorem ac dictum
        sollicitudin, orci massa fringilla odio, venenatis pretium est tellus
        eget dolor. Vivamus libero libero, condimentum et nulla sed, mattis
        pharetra felis. Aliquam venenatis mi risus, eget faucibus lorem
        fringilla ut. Praesent dolor nunc, faucibus eu nisi et, condimentum
        tincidunt nibh. Curabitur erat nibh, aliquam at malesuada nec, congue
        non augue. Etiam euismod auctor pulvinar. Donec ut tincidunt massa.
      </p>
    </div>
  );
}

export default ModalPage;

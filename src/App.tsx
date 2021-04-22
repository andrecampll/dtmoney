import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import theme from './styles/theme';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
        <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
        <Dashboard />
        <GlobalStyle />

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
    </ThemeProvider>
  )
}

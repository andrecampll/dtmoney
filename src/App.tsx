import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import theme from './styles/theme';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
          <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
          <Dashboard />

          <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseTransactionModal}
          />

          <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  )
}

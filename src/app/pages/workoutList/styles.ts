import styled from "styled-components";


export const WorkoutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const DateFilterInput = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 20px 0;
  background-color: #f0f0f0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 36px;
    font-size: 14px;
    padding-left: 8px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    height: 32px;
    font-size: 13px;
  }
`;


export const WorkoutCard = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const WorkoutTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const WorkoutInfo = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ClientList = styled.ul`
  margin: 5px 0 0 0;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 15px;
    margin: 4px 0 0 0;
  }
`;

export const ClientItem = styled.li`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: stretch;
    gap: 8px;
    margin-top: 8px;
  }
`;

export const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 13px;
    width: 100%; 
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: #c82333;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 13px;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; 
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 90%; 
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;


export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 36px;
    font-size: 14px;
    padding-left: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    height: 32px;
    font-size: 13px;
  }
`;


export const ModalSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding-left: 10px;

  @media (max-width: 768px) {
    height: 36px;
    font-size: 14px;
    margin-bottom: 8px;
    padding-left: 8px;
  }

  @media (max-width: 480px) {
    height: 32px;
    font-size: 13px;
  }
`;


export const ClientListModal = styled.div`
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-height: 150px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    max-height: 120px;
  }
`;
export const ClientLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px; 

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const ClientCheckbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: stretch;
    gap: 8px;
  }
`;


export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 7px 10px;
    font-size: 13px;
  }
`;


export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: #5a6268;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 7px 10px;
    font-size: 13px;
  }
`;
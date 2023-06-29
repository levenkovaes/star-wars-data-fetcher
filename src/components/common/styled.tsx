import { Link } from "react-router-dom";
import styled from "styled-components";

export const SLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  color: var(--yellow);
  padding: 2px 0;
  margin: 4px 0 0;
  /* background-color: var(--black); */

  :visited {
    color: var(--yellow);
  }

  :hover {
    color: var(--orange);
  }
`;

export const SButton = styled.button`
  margin: 18px 0;
  padding: 10px 20px;
  background-color: var(--orange);
  color: var(--dark-blue);
  border: 1px solid var(--dark-blue);
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.3s;

  :hover {
    cursor: pointer;
    background-color: var(--yellow);
  }

  :active {
    transform: scale(0.95);
  }

  :disabled {
    cursor: unset;
    background-color: grey;
    :active {
      transform: none;
    }
  }
`;

export const SH1 = styled.h1`
  padding: 10px 0;
`;

export const SLoadingSpinner = styled.div`
  position: relative;
  left: -50px;

  @keyframes ldio-3du3xkaquuf {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .ldio-3du3xkaquuf div {
    left: 98px;
    top: 50px;
    position: absolute;
    animation: ldio-3du3xkaquuf linear 1s infinite;
    background: var(--yellow);
    width: 4px;
    height: 20px;
    border-radius: 2px / 10px;
    transform-origin: 2px 50px;
  }
  .ldio-3du3xkaquuf div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(2) {
    transform: rotate(12deg);
    animation-delay: -0.9333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(3) {
    transform: rotate(24deg);
    animation-delay: -0.9s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(4) {
    transform: rotate(36deg);
    animation-delay: -0.8666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(5) {
    transform: rotate(48deg);
    animation-delay: -0.8333333333333334s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(6) {
    transform: rotate(60deg);
    animation-delay: -0.8s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(7) {
    transform: rotate(72deg);
    animation-delay: -0.7666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(8) {
    transform: rotate(84deg);
    animation-delay: -0.7333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(9) {
    transform: rotate(96deg);
    animation-delay: -0.7s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(10) {
    transform: rotate(108deg);
    animation-delay: -0.6666666666666666s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(11) {
    transform: rotate(120deg);
    animation-delay: -0.6333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(12) {
    transform: rotate(132deg);
    animation-delay: -0.6s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(13) {
    transform: rotate(144deg);
    animation-delay: -0.5666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(14) {
    transform: rotate(156deg);
    animation-delay: -0.5333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(15) {
    transform: rotate(168deg);
    animation-delay: -0.5s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(16) {
    transform: rotate(180deg);
    animation-delay: -0.4666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(17) {
    transform: rotate(192deg);
    animation-delay: -0.43333333333333335s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(18) {
    transform: rotate(204deg);
    animation-delay: -0.4s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(19) {
    transform: rotate(216deg);
    animation-delay: -0.36666666666666664s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(20) {
    transform: rotate(228deg);
    animation-delay: -0.3333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(21) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(22) {
    transform: rotate(252deg);
    animation-delay: -0.26666666666666666s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(23) {
    transform: rotate(264deg);
    animation-delay: -0.23333333333333334s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(24) {
    transform: rotate(276deg);
    animation-delay: -0.2s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(25) {
    transform: rotate(288deg);
    animation-delay: -0.16666666666666666s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(26) {
    transform: rotate(300deg);
    animation-delay: -0.13333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(27) {
    transform: rotate(312deg);
    animation-delay: -0.1s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(28) {
    transform: rotate(324deg);
    animation-delay: -0.06666666666666667s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(29) {
    transform: rotate(336deg);
    animation-delay: -0.03333333333333333s;
    background: var(--yellow);
  }
  .ldio-3du3xkaquuf div:nth-child(30) {
    transform: rotate(348deg);
    animation-delay: 0s;
    background: var(--yellow);
  }
  .loadingio-spinner-spinner-4ywd8vlmt45 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-3du3xkaquuf {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-3du3xkaquuf div {
    box-sizing: content-box;
  }
  /* generated by https://loading.io/ */
`;

import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Nav from "../components/Nav/index.tsx";

//components

//semantic ui
// import { Button, Icon, Transition} from "semantic-ui-react";
// import { motion } from "framer-motion";

//styles
// import styles from "./styles.module.css";

//redux
// import { useDispatch, useSelector } from 'react-redux';
//actions
// import {currencyRequesting} from "../redux/currency/actions";
function index(props) {
  return (
    <div>
      <Nav />
      
    </div>
  );
}

export default index;
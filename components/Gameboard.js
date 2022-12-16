import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/styles";
import { ScrollView } from "react-native";

const NumberOfPoints = 6;
const Bonus1 = 63;
const NumbersOfD = 5;
const Throws = 3;

let bonusCheck = true;
let rounds = 6;
let selected = new Array(6).fill(0);
let board = [];


export default function Gameboard () {
  const counted = [];
  const row = [];

  const [ThrowsLeft, NbrOfThrowsLeft] = useState(Throws);
  const [status, setStatus] = useState("");
  const [selectedDices, setSelectedDices] = useState(new Array(NumbersOfD).fill(false));
  const [selectedPoints, setSelectedPoints] = useState(new Array(6).fill(false));
  const [total, setTotal] = useState(0);
  const [Bounus, setBonus] = useState(Bonus1);
  const [disable, setDisable] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  

  useEffect(() => {
   

    if (ThrowsLeft === 3) {
      setStatus("Game has not started yet, throw dices");
      setDisable(true);
      setButtonDisable(false);
    }
    if (ThrowsLeft < Throws) {
      setStatus("Throw dices");
    }

    if (ThrowsLeft <= 0) {
      NbrOfThrowsLeft(0);
      setDisable(false);
      setButtonDisable(true);
      setStatus("Select your points.");
    }
    if (rounds === 0 && ThrowsLeft === 0) {
      setStatus("Game Over! All points are selected.");
    }
    if (selectedPoints.every(val => val === true)) {
      setStatus(
        "Game Over! All points are selected. Restart to play again."
      );
      setButtonDisable(true)
    }
  }, [ThrowsLeft])


  for (let i = 0; i < NumbersOfD; i++) {
    row.push(
      <Pressable
        disabled={disable ? true : false}
        key={"row" + i}
        onPress={() => selectDice(i)}>
        <MaterialCommunityIcons
          name={board[i]}
          key={"row" + i}
          size={65}
          color={DiceColor(i)} />
      </Pressable>
    )
  }

  for (let i = 0; i < NumberOfPoints; i++) {
    counted.push(
      <Pressable
        disabled={disable ? true : false}
        key={"counted" + i}
        onPress={() => selectPoint(i)}>
        <Text style={[styles.gameinfo]}>{selected[i]}</Text>
        <MaterialCommunityIcons
          name={"numeric-" + (i + 1) + "-circle"}
          key={"counted" + i}
          size={45}
          color={getColor(i)} />
      </Pressable>
    )
  }


  

  

  function selectDice (i) {
    let dices = [...selectedDices];
    dices[i] = selectedDices[i] ? false : true;
    setSelectedDices(dices);
  }

  const selectPoint = i => {
    let points = [...selectedPoints];

    if (ThrowsLeft > 0) {
      setStatus("Throw 3 times before setting points");
      setDisable(true);
    } else if (points[i] === true) {
      setStatus("You already selected points for " + (i + 1));
      return
    }
    points[i] = true;
    rounds = rounds - 1;
    setSelectedPoints(points);
    countSpots(i);
    setSelectedDices(new Array(NumbersOfD).fill(false));
    NbrOfThrowsLeft(Throws);
  }
  
  
  function throwDices () {
    setDisable(false);
    if (Throws == 0) {
      return;
    } else if (Bonus1 <= total && bonusCheck == true) {
      setTotal(total);
      bonusCheck = false;
    }
    for (let i = 0; i < NumbersOfD; i++) {
      if (!selectedDices[i]) {
        let rnd = Math.floor(Math.random() * 6 + 1);
        board[i] = "dice-" + rnd;
      }
    }
    NbrOfThrowsLeft(ThrowsLeft - 1);
  }

  function countSpots (val) {
    let sum = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i].endsWith(val + 1)) {
        sum += val + 1;
      }
    }
    selected[val] = sum;
    setTotal(total + sum)
  }

  
  function bonus () {
    if (total < Bonus1) {
      return "You are " + (Bonus1 - total) + " points away from bonus";
    } else {
      return "Onnea, Congratulations, Grattis. You are now Mini-Yathzee master.";
    }
  }


  function restart () {
    NbrOfThrowsLeft(Throws)
    setButtonDisable(false)
    setTotal(0)
    setBonus(Bonus1)
    board = []
    setSelectedPoints(new Array(6).fill(false))
    setSelectedDices(new Array(NumbersOfD).fill(false))
  }

  function DiceColor (i) {
    return selectedDices[i] ? "#300D6E" : "#9D85C7";
  }

  function getColor (i) {
    return selectedPoints[i] ? "black" : "#67AFCB";
  }

  

  

  return (
    <ScrollView>
      <View style={styles.gameboard}>
        <View style={styles.flex}>
          <Text>{row}</Text>
        </View>
        <View style={[styles.gameinfo]}>
          <Text style={[styles.gameinfo]}>
            Throws left: {ThrowsLeft}
          </Text>
          <Text style={[styles.gameinfo]}>
            {status}
          </Text>
        </View>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => throwDices()}
            disabled={buttonDisable ? true : false}>
            <Text style={[styles.buttonText]}>
              Throw dices
            </Text>
          </Pressable>
          <Text style={[styles.total]}>
            Total: {total}
          </Text>
          <Text style={[styles.gameinfo]}>
            {bonus()}
          </Text>
          <View style={[styles.flex]}>
            {counted}
          </View>
        </View>
        <Pressable style={styles.button} onPress={() => restart()}>
          <Text style={[styles.buttonText]}>
            Restart
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

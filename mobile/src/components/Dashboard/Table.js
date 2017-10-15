import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from '../../utils/constants'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// const Table = styled.View``;
// const Head = styled.View``;
// const Row = styled.View``;
// const Cell = styled.View``;

class TableView extends Component {
  constructor(props){
    super(props)
    this.state = { tableHead: this.props.tableHead, tableData: this.props.tableData}
  }

  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableTitle = ['Title', 'Title2'];
    const tableData = [
      ['', '', ''],
      ['', '', ''],
    ];
    return (
        <Table>
          <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={{flexDirection: 'row'}}>
            <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row}/>
          </TableWrapper>
        </Table>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff', width: '95%' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
})

export default TableView

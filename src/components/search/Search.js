import { useState } from "react";
import './search.css'
import { Container, Location, SButton, SearchContainer, Title, Boxlocation, Span } from './search.elements'
import { FaMapMarkerAlt, FaCalendarDay } from "react-icons/fa";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import { ListOfLocations } from "../listoflocations/ListOfLocations";
import axios from "axios";


const Search = () => {
  const [openSelect, setOpenSelect] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);



  return (
    <SearchContainer>
      <Title>Busca ofertas en hoteles, casas y mucho más</Title>
      <Container>
        <Boxlocation onClick={() => setOpenSelect(!openSelect)}>
          <FaMapMarkerAlt />
          {/* <Location htmlFor="ciudad" type='tex' placeholder='¿A dónde vamos?'></Location> */}
          <ListOfLocations  select={openSelect} />
        </Boxlocation>
        <Boxlocation>
          <FaCalendarDay />
          <Span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MMM/yyyy')} to ${format(date[0].endDate, 'dd/MMM/yyyy')}`}</Span>
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />}
        </Boxlocation>
        <SButton>Buscar</SButton>
      </Container>
    </SearchContainer>
  )
}

export default Search
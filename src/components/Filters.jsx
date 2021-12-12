import { SettingsRemote } from '@material-ui/icons'
import {React,useState} from 'react'

import styled from 'styled-components'
import { Mobile } from '../Responsive'

const Container = styled.div``
const Title = styled.h1`
          margin:20px;
          margin-left: 40px;

`
const FilterContainer = styled.div`
          display:flex;
          justify-content: space-between;
`
const Filter = styled.div`
          margin: 20px;
          ${Mobile({margin:"10px", display:"flex",flexDirection:"column"})}
`

const FilterText = styled.span`
          margin: 20px;
          font-weight: 600;
          ${Mobile({margin:"10px"})}
`
const Select = styled.select`
          padding: 10px;
          margin-right: 20px;
          ${Mobile({margin:"5px"})}
`
const Option = styled.option`
${Mobile({fontSize:"12px"})}
`

const Filters = ({filter,setFilter,category,setSort}) => {

          const handleFilters=(e)=>{
                    const value = e.target.value
                    setFilter({
                    ...filter,[e.target.name]:value
                    }
                    )
          }
          const handleSort=(e)=>{
                    const value = e.target.value
                    setSort(value)
          }
          return (
                    <Container>
                    <Title>{category}</Title>
                    <FilterContainer>
                    <Filter>
                              <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                    <Option disabled selected>
                    Color
                    </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    </Select>

                    <Select name="size" onChange={handleFilters}>
                    <Option disabled selected>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
                    </Filter>

                    <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select  selected onChange={handleSort}>
                    <Option value="new">Newest</Option>
                    <Option value="aesc">Price(Low to High)</Option>
                    <Option value="desc">Price(High to Low)</Option>
                    </Select>
                    </Filter>         
                    </FilterContainer>
                    </Container>
          )

}

export default Filters


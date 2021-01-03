import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import OrderTable from "./OrderTable";

import { customersUrl, productsUrl } from "../utils";

const CardStyled = styled(Card)`
  margin: 10px;
`;

const CardContentStyled = styled(CardContent)`
  text-align: left;
`;

const OrderItem = ({ item }) => {
  const [customers, setCustomers] = useState();
  const [products, setProducts] = useState();
  const [showList, setShowList] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(
    () => {
      const fetchData = async function () {
        await axios.get(customersUrl).then((res) => {
          setCustomers(res.data);
        });
        await axios.get(productsUrl).then((res) => {
          setProducts(res.data);
        });

        setShowList(true);
      };
      return fetchData();
    },
    []
  );

  const customer =
    customers && customers.filter((cust) => cust.id === item.id)[0];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {showList && (
        <CardStyled>
          <CardContent>
            <Typography>
              Order no. {item.id}: {customer.name}
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
          </CardContent>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContentStyled>
              <OrderTable item={item} customers={customers} products={products} />
            </CardContentStyled>
          </Collapse>
        </CardStyled>
      )}
    </>
  );
};

OrderItem.propTypes = {
  item: PropTypes.object,
};

export default OrderItem;

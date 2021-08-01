import './index.scss';
import {
  DEFAULT_PRODUCT_PAGE_LIMIT,
  PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE,
  PAGINATION_SHOW_FIRST_AND_LAST_PAGES_LIMIT
} from "../../constants";

import { BaseSyntheticEvent } from 'react';
import { NextButton } from "./nextButton";
import { PrevButton } from "./prevButton";
import { ProductsState } from "../../reducers/productsReducer";
import React from 'react';
import classNames from "classnames";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import { useCallback } from 'react';

type IPaginationProps = {
  totalPage: number;
  activePage: number;
  getProducts: (page: number, limit: number) => void;
};

const PaginationBase: React.FC<any> = (props: IPaginationProps) => {

  const onPageNumberClick: React.MouseEventHandler<HTMLAnchorElement> = (event: BaseSyntheticEvent) => {
    const pageNumber = event.target.dataset && event.target.dataset.pageId && Number(event.target.dataset.pageId);
    if (pageNumber > 0) {
      props.getProducts(pageNumber, DEFAULT_PRODUCT_PAGE_LIMIT);
    }
  };

  const renderPageNumber: any = (index: number) => {
    const classname = classNames({ active: props.activePage === index });
    return (<a onClick={onPageNumberClick} data-page-id={index} className={classname}  key={`page_btn_${index}`}>{index}</a>);
  };

  const renderFirstAndLastPageNumbers = useCallback(() => {
    const pageNumbers: JSX.Element[] = [];

    for (let index = 1; index <= PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
    pageNumbers.push(<span className={'dots'} key={'pagination_dots'}>...</span>);
    for (let index = props.totalPage - PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE + 1; index <= props.totalPage; index++) {
      pageNumbers.push(renderPageNumber(index));
    }

    return pageNumbers;
  }, [props.activePage]);

  const renderPageNumbers = useCallback(() => {
    const pageNumbers: JSX.Element[] = [];

    for (let index = 1; index <= props.totalPage; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
    return pageNumbers;
  }, [props.activePage]);

  return (
    <div className={'pagination'}>
      <a className={'navigation prev'}>
        <PrevButton />
      </a>
      {props.totalPage > PAGINATION_SHOW_FIRST_AND_LAST_PAGES_LIMIT ? renderFirstAndLastPageNumbers() : renderPageNumbers()}
      <a className={'navigation next'}>
        <NextButton />
      </a>
    </div>
  )
};

const mapStateToProps = (combinedState: any) => {
  const { totalPage, activePage } = combinedState.productsReducer as ProductsState;

  return {
    totalPage,
    activePage
  };
};

export const Pagination = connect(mapStateToProps,{ getProducts })(PaginationBase);

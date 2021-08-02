import './index.scss';
import {
  DEFAULT_PRODUCT_PAGE_LIMIT,
  PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE,
  PAGINATION_SHOW_FIRST_AND_LAST_PAGES_LIMIT
} from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { BaseSyntheticEvent } from 'react';
import { NextButton } from "./nextButton";
import { PrevButton } from "./prevButton";
import { ProductsState } from "../../reducers/productsReducer";
import React from 'react';
import classNames from "classnames";
import { getProducts } from "../../actions/productsActions";
import { useCallback } from 'react';

type IPaginationProps = {
};

export const Pagination: React.FC<any> = (props: IPaginationProps) => {
  const { totalPage, activePage } = useSelector((state: any) => state.productsReducer as ProductsState);
  const dispatch = useDispatch();

  const onPrevClick = () => {
    if (activePage > 1) {
      dispatch(getProducts(activePage - 1, DEFAULT_PRODUCT_PAGE_LIMIT));
    }
  };

  const onNextClick = () => {
    if (activePage < totalPage) {
      dispatch(getProducts(activePage + 1, DEFAULT_PRODUCT_PAGE_LIMIT));
    }
  };

  const onPageNumberClick: React.MouseEventHandler<HTMLAnchorElement> = (event: BaseSyntheticEvent) => {
    const pageNumber = event.target.dataset && event.target.dataset.pageId && Number(event.target.dataset.pageId);
    if (pageNumber > 0) {
      dispatch(getProducts(pageNumber, DEFAULT_PRODUCT_PAGE_LIMIT));
    }
  };

  const renderPageNumber: any = (index: number) => {
    const classname = classNames({ active: activePage === index });
    return (<a onClick={onPageNumberClick} data-page-id={index} className={classname}  key={`page_btn_${index}`}>{index}</a>);
  };

  const renderFirstAndLastPageNumbers = useCallback(() => {
    const pageNumbers: JSX.Element[] = [];

    for (let index = 1; index <= PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
    pageNumbers.push(<span className={'dots'} key={'pagination_dots'}>...</span>);
    for (let index = totalPage - PAGINATION_FIRST_AND_LAST_PAGES_SLICING_VALUE + 1; index <= totalPage; index++) {
      pageNumbers.push(renderPageNumber(index));
    }

    return pageNumbers;
  }, [activePage]);

  const renderPageNumbers = useCallback(() => {
    const pageNumbers: JSX.Element[] = [];

    for (let index = 1; index <= totalPage; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
    return pageNumbers;
  }, [activePage]);

  return (
    <div className={'pagination'}>
      <a onClick={onPrevClick} className={'navigation prev'}>
        <PrevButton />
      </a>
      {totalPage > PAGINATION_SHOW_FIRST_AND_LAST_PAGES_LIMIT ? renderFirstAndLastPageNumbers() : renderPageNumbers()}
      <a onClick={onNextClick} className={'navigation next'}>
        <NextButton />
      </a>
    </div>
  )
};

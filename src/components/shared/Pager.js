/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Pagination, PaginationItem, PaginationLink, Row, Col} from 'reactstrap';

export default class Pager extends Component {
    constructor(props) {
        super(props);
        this.goToPage = this.goToPage.bind(this);
        this.getPagesLinks = this.getPagesLinks.bind(this);
        this.getPagesWhileCurrentInCenter = this.getPagesWhileCurrentInCenter.bind(this);
    }

    goToPage(e, page) {
        e.preventDefault();
        this.props.changePage(page)
    }

    getPagesLinks(current, from, to) {
        let pages = [];
        for (let i = from; i <= to; i++) {
            if (i === current) {
                pages.push(
                    <PaginationItem active key={i}>
                        <PaginationLink onClick={e => this.goToPage(e, i)}>{i}</PaginationLink>
                    </PaginationItem>
                );
            } else {
                pages.push(
                    <PaginationItem key={i}>
                        <PaginationLink onClick={e => this.goToPage(e, i)}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        }
        return pages;
    }

    getPagesWhileCurrentInCenter(page, pageCount) {
        let pages = [];
        pages.push(
            <PaginationItem key={1}>
                <PaginationLink onClick={e => this.goToPage(e, 1)}>1</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem key={2}>
                <PaginationLink onClick={e => this.goToPage(e, 2)}>2</PaginationLink>
            </PaginationItem>
        );

        pages.push(
            <PaginationItem disabled key={3}>
                <PaginationLink><span aria-hidden="true">...</span></PaginationLink>
            </PaginationItem>
        );

        pages.push(
            <PaginationItem key={page - 1}>
                <PaginationLink onClick={e => this.goToPage(e, page - 1)}>{page - 1}</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem active key={page}>
                <PaginationLink onClick={e => this.goToPage(e, page)}>{page}</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem key={page + 1}>
                <PaginationLink onClick={e => this.goToPage(e, page + 1)}>{page + 1}</PaginationLink>
            </PaginationItem>
        );

        pages.push(
            <PaginationItem disabled key={pageCount - 2}>
                <PaginationLink><span aria-hidden="true">...</span></PaginationLink>
            </PaginationItem>
        );

        pages.push(
            <PaginationItem key={pageCount - 1}>
                <PaginationLink onClick={e => this.goToPage(e, pageCount - 1)}>{pageCount - 1}</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem key={pageCount}>
                <PaginationLink onClick={e => this.goToPage(e, pageCount)}>{pageCount}</PaginationLink>
            </PaginationItem>
        );

        return pages;
    }

    getPagesWhileCurrentOnSide(page, pageCount) {
        let pages = [];

        pages.push(this.getPagesLinks(page, 1, 5));

        pages.push(
            <PaginationItem disabled key={6}>
                <PaginationLink><span aria-hidden="true">...</span></PaginationLink>
            </PaginationItem>
        );

        pages.push(this.getPagesLinks(page, pageCount - 5, pageCount))

        return pages;
    }

    render() {
        let {page, count, limit} = this.props;
        let pageCount = Math.ceil(count / limit);
        return (
            pageCount > 1 ? (
                <Pagination className="justify-content-center big-margin-bot">
                    {page !== 1 ? (
                        <PaginationItem key={0}>
                            <PaginationLink previous onClick={e => this.goToPage(e, page - 1)}/>
                        </PaginationItem>
                    ) : (
                        <PaginationItem disabled key={0}>
                            <PaginationLink previous/>
                        </PaginationItem>
                    )}

                    {pageCount < 10 ? (
                        this.getPagesLinks(page, 1, pageCount)
                    ) : (
                        (page < 5) || (page > (pageCount - 4)) ? (
                            this.getPagesWhileCurrentOnSide(page, pageCount)
                        ) : (
                            this.getPagesWhileCurrentInCenter(page, pageCount)
                        )
                    )}

                    {page !== pageCount ? (
                        <PaginationItem key={pageCount + 1}>
                            <PaginationLink next onClick={e => this.goToPage(e, page + 1)}/>
                        </PaginationItem>
                    ) : (
                        <PaginationItem disabled key={pageCount + 1}>
                            <PaginationLink next/>
                        </PaginationItem>
                    )}
                </Pagination>
            ) : (
                null
            )
        )
    }
}

Pager.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
};
/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class Pager extends Component {
    goToPage(e, page) {
        e.preventDefault();
        this.props.changePage(page)
    }

    getPagesLinks(current, from, to) {
        let pages = [];
        for (let i = from; i <= to; i++) {
            if (i === current) {
                pages.push(
                    <PaginationItem active>
                        <PaginationLink onClick={e => this.goToPage(e, i)}>i</PaginationLink>
                    </PaginationItem>
                );
            } else {
                pages.push(
                    <PaginationItem>
                        <PaginationLink onClick={e => this.goToPage(e, i)}>i</PaginationLink>
                    </PaginationItem>
                );
            }
        }
        return pages;
    }

    getPagesWhileCurrentInCenter(page, pageCount) {
        let pages = [];
        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, 1)}>1</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, 2)}>2</PaginationLink>
            </PaginationItem>
        );

        pages.push(<li className="disabled"><span aria-hidden="true">...</span></li>);

        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, page - 1)}>2</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, page)}>2</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, page + 1)}>2</PaginationLink>
            </PaginationItem>
        );

        pages.push(<li className="disabled"><span aria-hidden="true">...</span></li>);

        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, pageCount - 1)}>2</PaginationLink>
            </PaginationItem>
        );
        pages.push(
            <PaginationItem>
                <PaginationLink onClick={e => this.goToPage(e, pageCount)}>2</PaginationLink>
            </PaginationItem>
        );

        return pages;
    }

    render() {
        let {page, count, limit} = this.props;
        let pageCount = Math.ceil(count / limit);
        if (pageCount > 1) {
            return (
                <Pagination className="text-center">
                    {page !== 1 ? (
                        <PaginationItem>
                            <PaginationLink previous onClick={e => this.goToPage(e, page - 1)}/>
                        </PaginationItem>
                    ) : (
                        <PaginationItem disabled>
                            <PaginationLink previous/>
                        </PaginationItem>
                    )}

                    {pageCount < 10 ? (
                        this.getPagesLinks(page, 1, pageCount)
                    ) : (
                        (page < 5) || (page > (pageCount - 4)) ? (
                            this.getPagesLinks(page, 1, 5)
                            && <li className="disabled"><span aria-hidden="true">...</span></li>
                            && this.getPagesLinks(page, pageCount - 5, pageCount)
                        ) : (
                            this.getPagesWhileCurrentInCenter(page, pageCount)
                        )
                    )}

                    {page !== pageCount ? (
                        <PaginationItem>
                            <PaginationLink next onClick={e => this.goToPage(e, page + 1)}/>
                        </PaginationItem>
                    ) : (
                        <PaginationItem disabled>
                            <PaginationLink next/>
                        </PaginationItem>
                    )}
                </Pagination>
            )
        }
    }
}

Pager.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
};
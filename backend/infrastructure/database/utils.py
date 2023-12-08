from sqlalchemy import URL


def construct_sqlalchemy_url(driver, host, port, username, password, db) -> str:
    """
    Constructs and returns a SQLAlchemy URL for this database configuration.
    """

    uri = URL.create(
        drivername=f"postgresql+{driver}",
        username=username,
        password=password,
        host=host,
        port=port,
        database=db,
    )

    return uri.render_as_string(hide_password=False)

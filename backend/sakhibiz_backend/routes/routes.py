from sakhibiz_backend import app

@app.route("/", methods=["GET"])
def root():
    return "<h4> App running - online </h4>"


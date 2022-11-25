import { faLocationDot, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnstyledButton } from "@mantine/core";

function AccountType(props) {
  const { formData, setFormData, page, setPage, site, addSite } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormChange = (item, e) => {
    const limit = 6;
    let data = [...site];
    data[item][e.target.name] = e.target.value.slice(0, limit);
    addSite(data);
  };

  const addField = (e) => {
    e.preventDefault();
    let newSite = { site: "" };
    addSite([...site, newSite]);
  };

  const removeField = (i, e) => {
    e.preventDefault();
    let data = [...site];
    data.splice(i, 1);
    addSite(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.allSites === "0" && formData.type !== "1")
      return setError("User sites not chosen");
    setPage(page + 1);
  };

  return (
    <form className="form-container" noValidate onChange={handleChange}>
      <h2 className="form-header">Select Account Type</h2>
      <h4 className="form-subheader">
        Do you need to update a password or create a new user?
      </h4>
      <div className="form-inputs">
        <div className="form">
          <input
            className="form-radio"
            type="radio"
            id="changepass"
            name="type"
            value="1"
            defaultChecked={formData.type === "1"}></input>
          <label className="form-label" htmlFor="changepass">
            Update Password
          </label>
        </div>
        <div className="form">
          <input
            className="form-radio"
            type="radio"
            id="newpass"
            name="type"
            value="2"
            defaultChecked={formData.type === "2"}></input>
          <label className="form-label no-border" htmlFor="newpass">
            New Account
          </label>
        </div>
      </div>
      {formData.type === "2" && (
        <>
          <h4 className="form-subheader">
            Will the user need access to all sites or specific sites?
          </h4>
          <div className="form-container">
            <div className="form-inputs">
              <div className="form">
                <input
                  className="form-radio"
                  type="radio"
                  id="all-sites"
                  name="allSites"
                  value="1"
                  defaultChecked={formData.allSites === "1"}></input>
                <label className="form-label" htmlFor="all-sites">
                  All Sites
                </label>
              </div>
              <div className="form">
                <input
                  className="form-radio"
                  type="radio"
                  id="pcNumbers"
                  name="allSites"
                  value="2"
                  defaultChecked={formData.allSites === "2"}></input>
                <label className="form-label" htmlFor="pcNumbers">
                  PC Numbers
                </label>
              </div>
            </div>
            {formData.allSites === "2" && (
              <div className="form-pcnumbers">
                {site.map((item, i) => (
                  <div key={i}>
                    <div className="input-container">
                      <FontAwesomeIcon
                        className="start-icon"
                        icon={faLocationDot}
                      />
                      <input
                        type="number"
                        name="site"
                        value={item.site}
                        disabled={formData.allSites === "1"}
                        placeholder="PC Number"
                        onChange={(e) => handleFormChange(i, e)}
                        required></input>
                      <FontAwesomeIcon
                        className="trash-icon"
                        icon={faTrash}
                        onClick={(e) => removeField(i, e)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {formData.allSites === "2" && (
              <UnstyledButton
                className="submit-btn"
                disabled={formData.allSites === "1"}
                onClick={addField}>
                Add PC
              </UnstyledButton>
            )}
          </div>
        </>
      )}
      <div className="error-container"></div>
      <div
        className="navigation-container"
        gap={"1rem"}
        justify="flex-end"
        sx={{ width: "100%", height: "2.5rem" }}>
        <UnstyledButton
          sx={(theme) => ({
            width: "50%",
            position: "relative",
            color: "white",
            border: "none",
            background: "rgb(26, 43, 109)",
            font: "inherit",
            transition: "all 500ms ease",
            borderRadius: "0.3rem",
            height: "100%",
            "&:hover": {
              transform: "scale(1.05)",
              background: "rgb(26, 43, 109)",
            },
          })}
          onClick={handleFormSubmit}>
          Next
        </UnstyledButton>
      </div>
    </form>
  );
}

export default AccountType;

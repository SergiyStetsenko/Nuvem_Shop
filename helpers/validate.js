const Joi = require("joi");

function validateSyper(req, res, next) {
    const createSchema = Joi.object({
    nickname: Joi.string().min(3).required(),
    real_name: Joi.string().required(),
    origin_description: Joi.string().required(),
    superpowers:Joi.string().required(),
    catch_phrase:Joi.string().required(),
    });
    const validate = createSchema.validate(req.body);
    if (validate.error) {
      return res.status(400).send({ message: "missing required name field" });
    }
    next();
  }
  function validatePutHero(req, res, next) {
    const createSchema = Joi.object({
    nickname: Joi.string().min(3),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers:Joi.string(),
    catch_phrase:Joi.string(),
    }).min(1);
    const validate = createSchema.validate(req.body);
    if (validate.error) {
      return res.status(400).send({ message: "missing required name field" });
    }
    next();
  }

  exports.validateSyper= validateSyper
  exports.validatePutHero = validatePutHero